import { KUBIT_VARIANTS } from '@kubit-ui-web/design-system';
import { Skeleton as Story } from '@kubit-ui-web/react-components';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { argtypes } from './argtypes';

const { SkeletonShapeVariant, SkeletonVariantType } = KUBIT_VARIANTS;

const meta = {
  argTypes: argtypes(),
  component: Story,
  parameters: {
    layout: 'centered',
  },
  tags: ['loading', 'placeholder', 'status'],
  title: 'Components/Status/Skeleton',
} satisfies Meta<typeof Story>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Basic skeleton with default variant and square shape
 */
export const Basic: Story = {
  args: {
    'aria-label': 'Loading content',
    height: '30px',
    shapeVariant: SkeletonShapeVariant.SQUARE,
    variant: SkeletonVariantType.DEFAULT,
    width: '200px',
  },
};

/**
 * Circular skeleton, ideal for avatars and profile pictures
 */
export const Circle: Story = {
  args: {
    'aria-label': 'Loading avatar',
    height: '60px',
    shapeVariant: SkeletonShapeVariant.CIRCLE,
    variant: SkeletonVariantType.DEFAULT,
    width: '60px',
  },
};

/**
 * Square skeleton with various dimensions
 */
export const Square: Story = {
  args: {
    'aria-label': 'Loading image',
    height: '150px',
    shapeVariant: SkeletonShapeVariant.SQUARE,
    variant: SkeletonVariantType.DEFAULT,
    width: '200px',
  },
};

/**
 * Alternative variant with circle shape
 */
export const Alternative: Story = {
  args: {
    'aria-label': 'Loading profile',
    height: '80px',
    shapeVariant: SkeletonShapeVariant.CIRCLE,
    variant: SkeletonVariantType.ALTERNATIVE,
    width: '80px',
  },
};

/**
 * Skeleton with custom animation duration
 */
export const CustomDuration: Story = {
  args: {
    'aria-label': 'Loading with custom speed',
    duration: '3s',
    height: '40px',
    shapeVariant: SkeletonShapeVariant.SQUARE,
    variant: SkeletonVariantType.DEFAULT,
    width: '300px',
  },
};

/**
 * Card loading pattern with multiple skeletons
 */
export const CardPattern: Story = {
  render: () => (
    <div
      style={{
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        maxWidth: '400px',
        padding: '16px',
        width: '100%',
      }}
    >
      {/* Header with avatar and name */}
      <div
        style={{ alignItems: 'center', display: 'flex', marginBottom: '16px' }}
      >
        <Story
          aria-label="Loading avatar"
          height="50px"
          shapeVariant={SkeletonShapeVariant.CIRCLE}
          variant={SkeletonVariantType.DEFAULT}
          width="50px"
        />
        <div style={{ flex: 1, marginLeft: '12px' }}>
          <Story
            aria-label="Loading name"
            height="16px"
            shapeVariant={SkeletonShapeVariant.SQUARE}
            variant={SkeletonVariantType.DEFAULT}
            width="150px"
          />
          <div style={{ marginTop: '8px' }}>
            <Story
              aria-label="Loading subtitle"
              height="12px"
              shapeVariant={SkeletonShapeVariant.SQUARE}
              variant={SkeletonVariantType.DEFAULT}
              width="100px"
            />
          </div>
        </div>
      </div>

      {/* Image placeholder */}
      <Story
        aria-label="Loading image"
        height="200px"
        shapeVariant={SkeletonShapeVariant.SQUARE}
        variant={SkeletonVariantType.DEFAULT}
        width="100%"
      />

      {/* Text lines */}
      <div style={{ marginTop: '16px' }}>
        <Story
          aria-label="Loading text line 1"
          height="14px"
          shapeVariant={SkeletonShapeVariant.SQUARE}
          variant={SkeletonVariantType.DEFAULT}
          width="100%"
        />
        <div style={{ marginTop: '8px' }}>
          <Story
            aria-label="Loading text line 2"
            height="14px"
            shapeVariant={SkeletonShapeVariant.SQUARE}
            variant={SkeletonVariantType.DEFAULT}
            width="90%"
          />
        </div>
        <div style={{ marginTop: '8px' }}>
          <Story
            aria-label="Loading text line 3"
            height="14px"
            shapeVariant={SkeletonShapeVariant.SQUARE}
            variant={SkeletonVariantType.DEFAULT}
            width="95%"
          />
        </div>
      </div>
    </div>
  ),
};

/**
 * List loading pattern with repeated items
 */
export const ListPattern: Story = {
  render: () => (
    <div style={{ maxWidth: '500px', width: '100%' }}>
      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          style={{
            alignItems: 'center',
            borderBottom: '1px solid #e0e0e0',
            display: 'flex',
            padding: '12px 0',
          }}
        >
          <Story
            aria-label={`Loading item ${item} avatar`}
            height="40px"
            shapeVariant={SkeletonShapeVariant.CIRCLE}
            variant={SkeletonVariantType.DEFAULT}
            width="40px"
          />
          <div style={{ flex: 1, marginLeft: '12px' }}>
            <Story
              aria-label={`Loading item ${item} title`}
              height="16px"
              shapeVariant={SkeletonShapeVariant.SQUARE}
              variant={SkeletonVariantType.DEFAULT}
              width="200px"
            />
            <div style={{ marginTop: '8px' }}>
              <Story
                aria-label={`Loading item ${item} description`}
                height="12px"
                shapeVariant={SkeletonShapeVariant.SQUARE}
                variant={SkeletonVariantType.DEFAULT}
                width="150px"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
};

/**
 * Form loading pattern with labels and inputs
 */
export const FormPattern: Story = {
  render: () => (
    <div style={{ maxWidth: '400px', width: '100%' }}>
      {[1, 2, 3].map((field) => (
        <div key={field} style={{ marginBottom: '20px' }}>
          <Story
            aria-label={`Loading label ${field}`}
            height="16px"
            shapeVariant={SkeletonShapeVariant.SQUARE}
            variant={SkeletonVariantType.DEFAULT}
            width="120px"
          />
          <div style={{ marginTop: '8px' }}>
            <Story
              aria-label={`Loading input ${field}`}
              height="40px"
              shapeVariant={SkeletonShapeVariant.SQUARE}
              variant={SkeletonVariantType.DEFAULT}
              width="100%"
            />
          </div>
        </div>
      ))}
      <Story
        aria-label="Loading submit button"
        height="44px"
        shapeVariant={SkeletonShapeVariant.SQUARE}
        variant={SkeletonVariantType.DEFAULT}
        width="150px"
      />
    </div>
  ),
};

/**
 * Gallery/Grid loading pattern
 */
export const GalleryPattern: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gap: '16px',
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
        maxWidth: '800px',
      }}
    >
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div key={item}>
          <Story
            aria-label={`Loading image ${item}`}
            height="150px"
            shapeVariant={SkeletonShapeVariant.SQUARE}
            variant={SkeletonVariantType.DEFAULT}
            width="100%"
          />
          <div style={{ marginTop: '8px' }}>
            <Story
              aria-label={`Loading title ${item}`}
              height="16px"
              shapeVariant={SkeletonShapeVariant.SQUARE}
              variant={SkeletonVariantType.DEFAULT}
              width="100%"
            />
          </div>
          <div style={{ marginTop: '8px' }}>
            <Story
              aria-label={`Loading description ${item}`}
              height="12px"
              shapeVariant={SkeletonShapeVariant.SQUARE}
              variant={SkeletonVariantType.DEFAULT}
              width="70%"
            />
          </div>
        </div>
      ))}
    </div>
  ),
};

/**
 * Profile loading pattern with stats
 */
export const ProfilePattern: Story = {
  render: () => (
    <div
      style={{
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        maxWidth: '400px',
        padding: '24px',
        width: '100%',
      }}
    >
      {/* Avatar and name */}
      <div style={{ marginBottom: '24px', textAlign: 'center' }}>
        <div style={{ display: 'inline-block' }}>
          <Story
            aria-label="Loading profile picture"
            height="100px"
            shapeVariant={SkeletonShapeVariant.CIRCLE}
            variant={SkeletonVariantType.DEFAULT}
            width="100px"
          />
        </div>
        <div style={{ marginTop: '16px' }}>
          <Story
            aria-label="Loading name"
            height="24px"
            shapeVariant={SkeletonShapeVariant.SQUARE}
            variant={SkeletonVariantType.DEFAULT}
            width="200px"
          />
        </div>
        <div style={{ marginTop: '8px' }}>
          <Story
            aria-label="Loading username"
            height="16px"
            shapeVariant={SkeletonShapeVariant.SQUARE}
            variant={SkeletonVariantType.DEFAULT}
            width="150px"
          />
        </div>
      </div>

      {/* Stats */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginBottom: '24px',
        }}
      >
        {[1, 2, 3].map((stat) => (
          <div key={stat} style={{ textAlign: 'center' }}>
            <Story
              aria-label={`Loading stat ${stat} value`}
              height="20px"
              shapeVariant={SkeletonShapeVariant.SQUARE}
              variant={SkeletonVariantType.DEFAULT}
              width="60px"
            />
            <div style={{ marginTop: '8px' }}>
              <Story
                aria-label={`Loading stat ${stat} label`}
                height="14px"
                shapeVariant={SkeletonShapeVariant.SQUARE}
                variant={SkeletonVariantType.DEFAULT}
                width="80px"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Bio */}
      <div>
        <Story
          aria-label="Loading bio line 1"
          height="14px"
          shapeVariant={SkeletonShapeVariant.SQUARE}
          variant={SkeletonVariantType.DEFAULT}
          width="100%"
        />
        <div style={{ marginTop: '8px' }}>
          <Story
            aria-label="Loading bio line 2"
            height="14px"
            shapeVariant={SkeletonShapeVariant.SQUARE}
            variant={SkeletonVariantType.DEFAULT}
            width="95%"
          />
        </div>
        <div style={{ marginTop: '8px' }}>
          <Story
            aria-label="Loading bio line 3"
            height="14px"
            shapeVariant={SkeletonShapeVariant.SQUARE}
            variant={SkeletonVariantType.DEFAULT}
            width="90%"
          />
        </div>
      </div>

      {/* Button */}
      <div style={{ marginTop: '24px' }}>
        <Story
          aria-label="Loading action button"
          height="44px"
          shapeVariant={SkeletonShapeVariant.SQUARE}
          variant={SkeletonVariantType.DEFAULT}
          width="100%"
        />
      </div>
    </div>
  ),
};

/**
 * Article loading pattern
 */
export const ArticlePattern: Story = {
  render: () => (
    <article style={{ maxWidth: '800px', width: '100%' }}>
      {/* Featured Image */}
      <Story
        aria-label="Loading featured image"
        height="400px"
        shapeVariant={SkeletonShapeVariant.SQUARE}
        variant={SkeletonVariantType.DEFAULT}
        width="100%"
      />

      {/* Title */}
      <div style={{ marginTop: '24px' }}>
        <Story
          aria-label="Loading article title"
          height="32px"
          shapeVariant={SkeletonShapeVariant.SQUARE}
          variant={SkeletonVariantType.DEFAULT}
          width="80%"
        />
      </div>

      {/* Meta */}
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          gap: '16px',
          marginTop: '16px',
        }}
      >
        <Story
          aria-label="Loading author avatar"
          height="40px"
          shapeVariant={SkeletonShapeVariant.CIRCLE}
          variant={SkeletonVariantType.DEFAULT}
          width="40px"
        />
        <div style={{ flex: 1 }}>
          <Story
            aria-label="Loading author name"
            height="16px"
            shapeVariant={SkeletonShapeVariant.SQUARE}
            variant={SkeletonVariantType.DEFAULT}
            width="150px"
          />
          <div style={{ marginTop: '4px' }}>
            <Story
              aria-label="Loading publish date"
              height="14px"
              shapeVariant={SkeletonShapeVariant.SQUARE}
              variant={SkeletonVariantType.DEFAULT}
              width="100px"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ marginTop: '32px' }}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((line) => (
          <div key={line} style={{ marginTop: line === 1 ? 0 : '12px' }}>
            <Story
              aria-label={`Loading content line ${line}`}
              height="16px"
              shapeVariant={SkeletonShapeVariant.SQUARE}
              variant={SkeletonVariantType.DEFAULT}
              width={line % 4 === 0 ? '90%' : '100%'}
            />
          </div>
        ))}
      </div>
    </article>
  ),
};

/**
 * Dashboard stats cards loading pattern
 */
export const DashboardPattern: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gap: '24px',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        maxWidth: '1200px',
      }}
    >
      {[1, 2, 3, 4].map((card) => (
        <div
          key={card}
          style={{
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            padding: '20px',
          }}
        >
          <Story
            aria-label={`Loading stat ${card} title`}
            height="16px"
            shapeVariant={SkeletonShapeVariant.SQUARE}
            variant={SkeletonVariantType.DEFAULT}
            width="120px"
          />
          <div style={{ marginTop: '16px' }}>
            <Story
              aria-label={`Loading stat ${card} value`}
              height="32px"
              shapeVariant={SkeletonShapeVariant.SQUARE}
              variant={SkeletonVariantType.DEFAULT}
              width="80px"
            />
          </div>
          <div style={{ marginTop: '12px' }}>
            <Story
              aria-label={`Loading stat ${card} change`}
              height="12px"
              shapeVariant={SkeletonShapeVariant.SQUARE}
              variant={SkeletonVariantType.DEFAULT}
              width="100px"
            />
          </div>
        </div>
      ))}
    </div>
  ),
};

/**
 * All variants comparison
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3 style={{ marginBottom: '12px' }}>Default Variant - Square</h3>
        <Story
          aria-label="Default square skeleton"
          height="60px"
          shapeVariant={SkeletonShapeVariant.SQUARE}
          variant={SkeletonVariantType.DEFAULT}
          width="200px"
        />
      </div>

      <div>
        <h3 style={{ marginBottom: '12px' }}>Default Variant - Circle</h3>
        <Story
          aria-label="Default circle skeleton"
          height="60px"
          shapeVariant={SkeletonShapeVariant.CIRCLE}
          variant={SkeletonVariantType.DEFAULT}
          width="60px"
        />
      </div>

      <div>
        <h3 style={{ marginBottom: '12px' }}>Alternative Variant - Square</h3>
        <Story
          aria-label="Alternative square skeleton"
          height="60px"
          shapeVariant={SkeletonShapeVariant.SQUARE}
          variant={SkeletonVariantType.ALTERNATIVE}
          width="200px"
        />
      </div>

      <div>
        <h3 style={{ marginBottom: '12px' }}>Alternative Variant - Circle</h3>
        <Story
          aria-label="Alternative circle skeleton"
          height="60px"
          shapeVariant={SkeletonShapeVariant.CIRCLE}
          variant={SkeletonVariantType.ALTERNATIVE}
          width="60px"
        />
      </div>
    </div>
  ),
};
