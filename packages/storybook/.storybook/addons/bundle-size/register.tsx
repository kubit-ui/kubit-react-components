/* eslint-disable import/no-extraneous-dependencies, no-restricted-imports, no-console */
// @ts-ignore - React is used for JSX transformation
import React, { type FC, useEffect, useState } from 'react';
import { addons, types, useStorybookApi } from 'storybook/manager-api';

import bundleSizesData from '../../bundle-sizes.json';
import { BundleSizePanel } from '../../components/bundleSize/BundleSizePanel';

const ADDON_ID = 'kubit/bundle-size';
const PANEL_ID = `${ADDON_ID}/panel`;

interface BundleSizeData {
  sizes?: {
    css?: {
      formatted?: string;
      gzip?: number | string;
      gzipFormatted?: string;
      raw?: number | string;
    };
    js?: {
      formatted?: string;
      gzip?: number | string;
      gzipFormatted?: string;
      raw?: number | string;
    };
    total?: {
      formatted?: string;
      gzip?: number | string;
      gzipFormatted?: string;
      raw?: number | string;
    };
  };
  treeshakeable?: boolean;
}

interface BundleSizePanelWrapperProps {
  active: boolean;
}

const BundleSizePanelWrapper: FC<BundleSizePanelWrapperProps> = ({
  active,
}) => {
  const [bundleSize, setBundleSize] = useState<BundleSizeData | null>(null);
  const api = useStorybookApi();

  useEffect(() => {
    if (!active) {
      return;
    }

    const updateBundleSize = (): void => {
      if (!api) {
        return;
      }

      try {
        const storyId = api.getUrlState().storyId;
        if (!storyId) {
          setBundleSize(null);
          return;
        }

        // Extract component name from storyId
        // storyId format: "components-containment-accordion--uncontrolled"
        const parts = storyId.split('--')[0]; // Get "components-containment-accordion"
        const componentName = parts.split('-').pop(); // Get "accordion"

        console.log('[Bundle Size] Story ID:', storyId);
        console.log('[Bundle Size] Extracted component:', componentName);

        if (componentName) {
          const data = bundleSizesData as any;
          const size = data?.components?.[componentName];

          if (size) {
            console.log('[Bundle Size] Found size data:', size);
            setBundleSize(size);
          } else {
            console.log('[Bundle Size] No size data for:', componentName);
            setBundleSize(null);
          }
        }
      } catch (error) {
        console.error('[Bundle Size] Error:', error);
        setBundleSize(null);
      }
    };

    updateBundleSize();

    // Listen for URL changes (story changes)
    window.addEventListener('popstate', updateBundleSize);
    const originalPushState = window.history.pushState;
    window.history.pushState = function (
      ...args: Parameters<typeof originalPushState>
    ): void {
      originalPushState.apply(this, args);
      updateBundleSize();
    };

    const cleanup = (): void => {
      window.removeEventListener('popstate', updateBundleSize);
      window.history.pushState = originalPushState;
    };

    return cleanup;
  }, [active, api]);

  if (!active) {
    return null;
  }

  return (
    <div style={{ padding: '16px' }}>
      <BundleSizePanel bundleSize={bundleSize} />
    </div>
  );
};

// Register the addon
addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    match: ({ viewMode }: { viewMode?: string }) =>
      viewMode === 'story' || viewMode === 'docs',
    render: ({ active }: { active?: boolean }) => (
      <BundleSizePanelWrapper active={!!active} />
    ),
    title: 'Bundle Size',
    type: types.PANEL,
  });
});
