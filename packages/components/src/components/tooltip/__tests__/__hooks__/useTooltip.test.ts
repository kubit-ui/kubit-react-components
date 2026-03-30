import { createRef } from "react";

import { act, renderHook } from "@testing-library/react";

import { useTooltip } from "../../hooks/useTooltip";

vi.mock("@/lib/hooks/useMediaDevice/useActiveBreakpoints", () => ({
  useActiveBreakpoints: () => ({
    device: "DESKTOP",
    isDesktop: true,
    isMobile: false,
    isTablet: false,
  }),
}));

describe("useTooltip", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  describe("initial state", () => {
    it("should initialize with closed state", () => {
      const { result } = renderHook(() => useTooltip({ onToggle: vi.fn() }));

      expect(result.current.open).toBe(false);
    });

    it("should provide triggerHandlers for desktop", () => {
      const { result } = renderHook(() => useTooltip({ onToggle: vi.fn() }));

      // Desktop handlers: focus, blur, mouseDown, mouseUp
      expect(result.current.triggerHandlers.onFocus).toBeDefined();
      expect(result.current.triggerHandlers.onBlur).toBeDefined();
      expect(result.current.triggerHandlers.onMouseDown).toBeDefined();
      expect(result.current.triggerHandlers.onMouseUp).toBeDefined();
    });

    it("should provide mouse handlers for desktop", () => {
      const { result } = renderHook(() => useTooltip({ onToggle: vi.fn() }));

      expect(result.current.handleMouseEnter).toBeDefined();
      expect(result.current.handleMouseLeave).toBeDefined();
    });
  });

  describe("mouse interactions", () => {
    it("should open on mouse enter", () => {
      const onToggle = vi.fn();
      const { result } = renderHook(() => useTooltip({ onToggle }));

      act(() => {
        result.current.handleMouseEnter?.();
      });

      expect(result.current.open).toBe(true);
      expect(onToggle).toHaveBeenCalledWith(true);
    });

    it("should close on mouse leave", () => {
      const onToggle = vi.fn();
      const { result } = renderHook(() => useTooltip({ onToggle }));

      // Open first
      act(() => {
        result.current.handleMouseEnter?.();
      });

      // Then close
      act(() => {
        result.current.handleMouseLeave?.();
      });

      expect(result.current.open).toBe(false);
      expect(onToggle).toHaveBeenCalledWith(false);
    });
  });

  describe("handleClose", () => {
    it("should close the tooltip", () => {
      const onToggle = vi.fn();
      const { result } = renderHook(() => useTooltip({ onToggle }));

      // Open first
      act(() => {
        result.current.handleMouseEnter?.();
      });
      expect(result.current.open).toBe(true);

      // Then close
      act(() => {
        result.current.handleClose();
      });

      expect(result.current.open).toBe(false);
      expect(onToggle).toHaveBeenLastCalledWith(false);
    });
  });

  describe("focus interactions", () => {
    it("should open on focus", () => {
      const onToggle = vi.fn();
      const { result } = renderHook(() => useTooltip({ onToggle }));

      act(() => {
        result.current.triggerHandlers.onFocus?.(
          {} as React.FocusEvent<HTMLDivElement>,
        );
      });

      expect(result.current.open).toBe(true);
      expect(onToggle).toHaveBeenCalledWith(true);
    });

    it("should close on blur when focus moves outside tooltip", () => {
      const onToggle = vi.fn();
      const tooltipRef = createRef<HTMLDivElement>();
      const { result } = renderHook(() => useTooltip({ onToggle, tooltipRef }));

      // Open first
      act(() => {
        result.current.triggerHandlers.onFocus?.(
          {} as React.FocusEvent<HTMLDivElement>,
        );
      });

      // Blur with relatedTarget outside tooltip
      act(() => {
        result.current.triggerHandlers.onBlur?.({
          relatedTarget: document.body,
        } as unknown as React.FocusEvent<HTMLDivElement>);
      });

      expect(result.current.open).toBe(false);
    });
  });
});
