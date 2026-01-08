import type { Meta, StoryObj } from '@storybook/react';

import { type Placement, offset, shift } from '@floating-ui/dom';
import { useEffect, useMemo, useRef, useState } from 'react';

import { Popover as Story } from '../popover';
import { argtypes } from './argtypes';
import {
  PopoverWithAnchorElementContent,
  RadioGroupPositions,
} from './demos/popoverWithAnchorElementDemo';
import { popoverWithAnchorElementNotes } from './notes';

const meta = {
  argTypes: argtypes(),
  component: Story,
  parameters: {
    githubUrl:
      'https://github.com/kubit-ui/kubit-react-components/tree/main/src/components/Popover',
    note: popoverWithAnchorElementNotes,
  },
  tags: ['autodocs', 'resources'],
  title: 'Components/Resources/Popover',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta> & { args: { themeArgs?: object } };

const StoryWithHooks = (args) => {
  const [placement, setPlacement] = useState<Placement>('left');
  const [isReady, setIsReady] = useState(false);
  const [enableFlip, setEnableFlip] = useState(true);
  const [hideWhenDetached, setHideWhenDetached] = useState(true);
  const anchorElRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  // Effect to detect when button is available in DOM
  useEffect(() => {
    const checkButtonRef = () => {
      if (anchorElRef.current) {
        setIsReady(true);
      }
    };

    // Check immediately
    checkButtonRef();

    // And check after a short delay
    const timeoutId = setTimeout(checkButtonRef, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  // Handler to change popover position
  const handlePlacementChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPlacement(event.target.value as Placement);
  };

  // Handler to toggle flip behavior
  const handleFlipChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnableFlip(event.target.checked);
  };

  // Handler to toggle hideWhenDetached behavior
  const handleHideWhenDetachedChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setHideWhenDetached(event.target.checked);
  };

  // Create custom middlewares based on flip setting
  const customMiddlewares = useMemo(() => {
    if (!enableFlip) {
      // When flip is disabled, provide custom middlewares that replace defaults
      return [offset({ crossAxis: 0, mainAxis: 8 }), shift({ padding: 8 })];
    }
    // When flip is enabled, return undefined to use defaults
    return undefined;
  }, [enableFlip]);

  return (
    <div
      style={{
        alignItems: 'center',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'visible',
        width: '100%',
      }}
    >
      <div style={{ marginBottom: '20px' }}>
        <label>
          <input
            checked={enableFlip}
            style={{ marginRight: '8px' }}
            type="checkbox"
            onChange={handleFlipChange}
          />
          Enable automatic repositioning (flip)
        </label>
        <p style={{ color: '#666', fontSize: '12px', margin: '4px 0 0 0' }}>
          When disabled, popover stays in the selected position even if it
          overflows
        </p>
        <label style={{ display: 'block', marginTop: '12px' }}>
          <input
            checked={hideWhenDetached}
            style={{ marginRight: '8px' }}
            type="checkbox"
            onChange={handleHideWhenDetachedChange}
          />
          Hide when anchor is not visible
        </label>
        <p style={{ color: '#666', fontSize: '12px', margin: '4px 0 0 0' }}>
          When enabled, popover hides when anchor element is scrolled out of
          view
        </p>
      </div>
      <RadioGroupPositions
        anchorElRef={anchorElRef}
        handlePlacementChange={handlePlacementChange}
        placement={placement}
      />
      <Story
        ref={popoverRef}
        {...args}
        anchorElement={anchorElRef?.current}
        disableAnimations={true}
        middlewareOptions={{ hideWhenDetached }}
        middlewares={customMiddlewares}
        open={isReady} // Only show popover when button is available
        placement={placement}
        zIndex={500}
      >
        <PopoverWithAnchorElementContent placement={placement} />
      </Story>
    </div>
  );
};

const commonArgs = {
  arrowStyles: {
    backgroundColor: '#767676',
    border: '1px solid #e0e0e0',
    size: 8,
  },
  children: 'Content',
};

export const PopoverWithAnchorElement: Story = {
  args: {
    ...commonArgs,
  },
  render: ({ ...args }) => <StoryWithHooks {...args} />,
};
