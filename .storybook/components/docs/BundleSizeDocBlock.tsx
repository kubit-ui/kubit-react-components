import { useEffect, useState } from 'react';

import type { StoryContext } from '@storybook/react-vite';

import bundleSizesData from '../../bundle-sizes.json';
import { BundleSizePanel } from '../bundleSize/BundleSizePanel';
import { extractComponentName, getBundleSize } from '../bundleSize/utils';

interface BundleSizeDocBlockProps {
  componentName?: string;
  context?: StoryContext;
}

/**
 * Documentation block that displays bundle size information for a component.
 * Can be used in MDX files or as a standalone component.
 *
 * @example
 * ```tsx
 * // In an MDX file
 * import { BundleSizeDocBlock } from '.storybook/components/docs/BundleSizeDocBlock';
 *
 * <BundleSizeDocBlock componentName="Accordion" />
 * ```
 *
 * @example
 * ```tsx
 * // In a story
 * export const WithBundleInfo = {
 *   parameters: {
 *     docs: {
 *       page: () => (
 *         <>
 *           <Description />
 *           <Primary />
 *           <Controls />
 *           <BundleSizeDocBlock />
 *         </>
 *       ),
 *     },
 *   },
 * };
 * ```
 */
export const BundleSizeDocBlock: React.FC<BundleSizeDocBlockProps> = ({
  componentName: providedName,
  context,
}) => {
  const [bundleSize, setBundleSize] = useState<ReturnType<
    typeof getBundleSize
  > | null>(null);

  useEffect(() => {
    let name = providedName;

    // Try to get component name from context if not provided
    if (!name && context?.title) {
      name = extractComponentName(context.title);
    }

    // Try to get from window location if still not available
    if (!name && typeof window !== 'undefined') {
      const pathParts = window.location.pathname.split('/');
      const storyPath = pathParts[pathParts.length - 1];
      if (storyPath) {
        // Extract component name from story path (e.g., "accordion--uncontrolled" -> "Accordion")
        const componentPart = storyPath.split('--')[0];
        if (componentPart) {
          name = componentPart.charAt(0).toUpperCase() + componentPart.slice(1);
        }
      }
    }

    if (name) {
      const size = getBundleSize(name);
      setBundleSize(size);
    }
  }, [providedName, context]);

  return (
    <div style={{ marginTop: '2rem' }}>
      <BundleSizePanel bundleSize={bundleSize} />
    </div>
  );
};
