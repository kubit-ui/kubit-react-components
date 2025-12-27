import type { Meta, StoryObj } from '@storybook/react';

import { type ReactNode, useCallback, useMemo, useRef, useState } from 'react';

import { CarouselVariantType } from '@/lib/designSystem/kubit/components/carousel/variants';
import { Note } from '@/lib/storybook/components/note/note';

import type { CarouselRefType, ICarousel } from '../types/carousel';

import { Carousel as Story } from '../carousel';
import { argtypes } from './argtypes';

type ICarouselStory = Omit<ICarousel, 'elements' | 'ref'> & {
  testNumCarouselElements: number;
};

const ReplaceContentStyled = ({
  children,
  role,
  ...aria
}: {
  children: ReactNode;
  ['aria-label']?: string;
  ['aria-roledescription']?: string;
  role?: string;
}) => {
  return (
    <div
      role={role}
      style={{
        alignItems: 'center',
        backgroundColor: '#f7f2fb',
        border: '3px dashed #8e00ff',
        borderRadius: '10px',
        boxShadow: 'rgba(255, 0, 252, 0.62) 1px 2px 6px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: '50px 20px',
        width: '300px',
      }}
      {...aria}
    >
      {children}
    </div>
  );
};

const ButtonStyled = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) => {
  return (
    <button
      style={{
        backgroundColor: '#f7f2fb',
        border: '3px solid #8e00ff',
        cursor: 'pointer',
        padding: '10px',
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const ReplaceContent = ({
  slicePosition,
  slicesNumber,
}: {
  slicePosition: number;
  slicesNumber: number;
}) => {
  return (
    <ReplaceContentStyled
      aria-label={`Slide ${slicePosition + 1} of ${slicesNumber}`}
      aria-roledescription="slide"
      role="group"
    >
      <p>
        Slice {slicePosition + 1} of {slicesNumber}
      </p>
      <ButtonStyled
        // eslint-disable-next-line no-alert
        onClick={() => alert(`Clicking on the Slide ${slicePosition + 1}`)}
      >
        Button
      </ButtonStyled>
    </ReplaceContentStyled>
  );
};

const buildElements = (numElements?: number) => {
  const _numElements =
    numElements !== undefined ? Math.max(0, numElements) : 10;
  return Array.from({ length: _numElements }, (_, i) => (
    <ReplaceContent key={i} slicePosition={i} slicesNumber={_numElements} />
  ));
};

const TestNumCarouselElementsNote = () => (
  <Note
    text={[
      <span key="note-0">
        Use the prop <strong>testNumCarouselElements</strong> to change the
        number of elements in the carousel. (This is not a real prop, only for
        testing purposes.)
      </span>,
    ]}
  />
);

const CarouselStory = ({
  testNumCarouselElements,
  ...args
}: ICarouselStory) => {
  const elements = useMemo(() => {
    return buildElements(testNumCarouselElements);
  }, [testNumCarouselElements]);

  return (
    <div>
      <TestNumCarouselElementsNote />
      <Story {...args} elements={elements} />
    </div>
  );
};

const meta = {
  argTypes: argtypes(),
  component: CarouselStory,
  tags: ['autodocs', 'navigation'],
  title: 'Components/Navigation/Carousel',
} satisfies Meta<ICarouselStory>;

export default meta;

type Story = StoryObj<ICarouselStory>;

const commonArgs: ICarouselStory = {
  screenReaderOnly: {
    content: 'Page {{currentPage}} of {{numPages}}',
  },
  testNumCarouselElements: 10,
  variant: CarouselVariantType.DEFAULT,
};

export const Carousel: Story = {
  args: {
    ...commonArgs,
  },
};

const CarouselIntegrationExampleStory = ({
  testNumCarouselElements,
  ...args
}: ICarouselStory) => {
  const elements = useMemo(() => {
    return buildElements(testNumCarouselElements);
  }, [testNumCarouselElements]);

  const carouselRef = useRef<CarouselRefType>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [numPages, setNumPages] = useState<number>(0);

  const handleLeftArrowClick = () => {
    carouselRef.current?.changePage({ newPage: currentPage - 1 });
  };

  const handleRightArrowClick = () => {
    carouselRef.current?.changePage({ newPage: currentPage + 1 });
  };

  const handlePageChange = useCallback((newPage: number) => {
    setCurrentPage(newPage);
  }, []);

  const handleNumPagesChange = useCallback((numPagesChange: number) => {
    setNumPages(numPagesChange);
  }, []);

  const disabledLeftArrow =
    numPages <= 1 || (!args.circular && currentPage === 0);
  const disabledRightArrow =
    numPages <= 1 || (!args.circular && currentPage === (numPages || 1) - 1);

  return (
    <div>
      <TestNumCarouselElementsNote />
      <Note
        text={[
          <span key="note-1">
            This story demostrates how to integrate the carousel with custom
            left, right arrows and with a small pagination.
          </span>,
          <span key="note-2">
            However,{' '}
            <strong>
              this story is not aim to be used as a production-ready example,
              nor to test the carousel&apos;s accessibility.
            </strong>
          </span>,
          <span key="note-3">
            Note some props have been overridden and might not work as expected.
          </span>,
        ]}
      />
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          width: '100%',
        }}
      >
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <button
            disabled={disabledLeftArrow}
            style={{
              border: '2px solid #8e00ff',
              borderColor: disabledLeftArrow ? 'grey' : '#8e00ff',
              color: disabledLeftArrow ? 'grey' : '#8e00ff',
              cursor: disabledLeftArrow ? 'default' : 'pointer',
              padding: '10px',
            }}
            onClick={handleLeftArrowClick}
          >
            Prev
          </button>
          <Story
            {...args}
            ref={carouselRef}
            defaultPage={currentPage}
            elements={elements}
            onNumPagesChange={handleNumPagesChange}
            onPageChange={handlePageChange}
          />
          <button
            disabled={disabledRightArrow}
            style={{
              border: '2px solid #8e00ff',
              borderColor: disabledRightArrow ? 'grey' : '#8e00ff',
              color: disabledRightArrow ? 'grey' : '#8e00ff',
              cursor: disabledRightArrow ? 'default' : 'pointer',
              padding: '10px',
            }}
            onClick={handleRightArrowClick}
          >
            Next
          </button>
        </div>
        {numPages ? (
          <p>
            Page {currentPage + 1} of {numPages}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export const CarouselIntegrationExample: Story = {
  args: {
    ...commonArgs,
    autoFitContainer: true,
    circular: true,
    screenReaderOnly: undefined,
  },
  render: (args) => <CarouselIntegrationExampleStory {...args} />,
};

export const CarouselWithAdditionalClasses: Story = {
  args: {
    ...commonArgs,
    additionalClasses: {
      carousel: 'custom-background custom-padding',
    },
  },
};
