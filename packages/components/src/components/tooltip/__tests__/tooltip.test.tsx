import { createRef } from "react";

import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "vitest-axe";

import { render } from "@/lib/tests/render/render";

import { TooltipControlled } from "../tooltipControlled";
import { TooltipUnControlled } from "../tooltipUnControlled";
import type { ITooltip, ITooltipControlled } from "../types/tooltip";

const mockResizeObserver = vi.fn(function (this: ResizeObserver) {
  this.observe = vi.fn();
  this.disconnect = vi.fn();
  this.unobserve = vi.fn();
}) as unknown as typeof ResizeObserver;

const mockProps: ITooltip = {
  children: <span>Hover me</span>,
  mainContent: { content: "Tooltip content" },
  variant: "REGULAR",
};

describe("Tooltip", () => {
  beforeEach(() => {
    global.ResizeObserver = mockResizeObserver;
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe("Uncontrolled", () => {
    describe("rendering", () => {
      it("should render trigger and be accessible", async () => {
        const { container } = render(<TooltipUnControlled {...mockProps} />);

        expect(
          screen.getByRole("button", { name: "Hover me" }),
        ).toBeInTheDocument();
        expect((await axe(container)).violations).toHaveLength(0);
      });

      it("should forward ref to root container", () => {
        const ref = createRef<HTMLDivElement>();
        render(<TooltipUnControlled {...mockProps} ref={ref} />);

        expect(ref.current).toBeInstanceOf(HTMLDivElement);
        expect(ref.current).toHaveAttribute("data-testid", "tooltip");
      });
    });

    describe("interactions", () => {
      it("should open tooltip on hover and call onToggle", async () => {
        const user = userEvent.setup();
        const onToggle = vi.fn();
        render(<TooltipUnControlled {...mockProps} onToggle={onToggle} />);

        const trigger = screen.getByRole("button", { name: "Hover me" });
        await user.hover(trigger);

        await waitFor(() => {
          expect(onToggle).toHaveBeenCalledWith(true);
        });
        expect(screen.getByText("Tooltip content")).toBeInTheDocument();
      });

      it("should close tooltip on unhover", async () => {
        const user = userEvent.setup();
        const onToggle = vi.fn();
        render(<TooltipUnControlled {...mockProps} onToggle={onToggle} />);

        const trigger = screen.getByRole("button", { name: "Hover me" });

        // Open tooltip
        await user.hover(trigger);
        await waitFor(() => {
          expect(screen.getByText("Tooltip content")).toBeInTheDocument();
        });

        // Close tooltip
        await user.unhover(trigger);
        await waitFor(() => {
          expect(onToggle).toHaveBeenCalledWith(false);
        });
      });

      it("should combine internal handleClose with user popover.onClose", async () => {
        const user = userEvent.setup();
        const onToggle = vi.fn();
        const popoverOnClose = vi.fn();

        render(
          <TooltipUnControlled
            {...mockProps}
            popover={{ onClose: popoverOnClose }}
            onToggle={onToggle}
          />,
        );

        // Open tooltip
        const trigger = screen.getByRole("button", { name: "Hover me" });
        await user.hover(trigger);

        await waitFor(() => {
          expect(screen.getByText("Tooltip content")).toBeInTheDocument();
        });

        // Close by pressing Escape (triggers popover.onClose which is our combined handler)
        await user.keyboard("{Escape}");

        await waitFor(() => {
          expect(onToggle).toHaveBeenCalledWith(false); // handleClose was called
          expect(popoverOnClose).toHaveBeenCalled(); // user's onClose was called
        });
      });
    });

    describe("keyboard navigation", () => {
      it("should be focusable and open on focus", async () => {
        const user = userEvent.setup();
        const onToggle = vi.fn();
        render(<TooltipUnControlled {...mockProps} onToggle={onToggle} />);

        // Tab to focus the trigger
        await user.tab();

        await waitFor(() => {
          expect(onToggle).toHaveBeenCalledWith(true);
        });
      });
    });
  });

  describe("Controlled", () => {
    const controlledProps: ITooltipControlled = {
      children: <span>Trigger</span>,
      mainContent: { content: "Controlled content" },
      open: false,
      variant: "REGULAR",
    };

    describe("rendering", () => {
      it("should respect controlled open state", async () => {
        const { container, rerender } = render(
          <TooltipControlled {...controlledProps} open={false} />,
        );

        expect(
          screen.queryByText("Controlled content"),
        ).not.toBeInTheDocument();

        rerender(<TooltipControlled {...controlledProps} open={true} />);

        expect(screen.getByText("Controlled content")).toBeInTheDocument();
        expect((await axe(container)).violations).toHaveLength(0);
      });

      it("should not open when controlled open is false, even on hover", async () => {
        const user = userEvent.setup();
        render(<TooltipControlled {...controlledProps} open={false} />);

        const trigger = screen.getByRole("button", { name: "Trigger" });
        await user.hover(trigger);

        // Should still not show because it's controlled
        expect(
          screen.queryByText("Controlled content"),
        ).not.toBeInTheDocument();
      });
    });

    describe("accessibility", () => {
      it("should have aria-describedby linking to tooltip content", async () => {
        const { container } = render(
          <TooltipControlled {...controlledProps} open={true} />,
        );

        const trigger = screen.getByRole("button", { name: "Trigger" });
        const describedById = trigger.getAttribute("aria-describedby");

        expect(describedById).toBeTruthy();

        // The content should have the same id
        const content = screen.getByText("Controlled content");
        const contentContainer = content.closest("[id]");
        expect(contentContainer?.getAttribute("id")).toBe(describedById);

        expect((await axe(container)).violations).toHaveLength(0);
      });
    });
  });
});
