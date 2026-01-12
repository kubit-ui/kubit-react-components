/* eslint-disable no-restricted-imports */
import './bundleSize.css';

import React from 'react';

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

interface BundleSizePanelProps {
  bundleSize?: BundleSizeData | null;
}

export const BundleSizePanel: React.FC<BundleSizePanelProps> = ({
  bundleSize,
}) => {
  if (!bundleSize) {
    return (
      <div className="bundle-no-data">
        <p>📦 Bundle size information not available</p>
        <p style={{ fontSize: '12px', marginTop: '8px' }}>
          Run <code>yarn generate:bundle-sizes</code> to generate size data
        </p>
      </div>
    );
  }

  const { css, js, total } = bundleSize.sizes || {};
  const treeshakeable = bundleSize.treeshakeable !== false;

  return (
    <div className="bundle-container">
      <h3 className="bundle-title">
        📦 Bundle Size{' '}
        {treeshakeable && (
          <span className="bundle-badge bundle-badge--success">
            Tree-shakeable
          </span>
        )}
      </h3>

      <div className="bundle-size-grid">
        {js && (
          <div className="bundle-size-card">
            <div className="bundle-size-label">JavaScript</div>
            <div className="bundle-size-value">
              {js.gzipFormatted || js.gzip}
            </div>
            <div className="bundle-size-subvalue">
              {js.formatted || js.raw} (raw)
            </div>
          </div>
        )}

        {css && css.raw !== 0 && (
          <div className="bundle-size-card">
            <div className="bundle-size-label">Styles (CSS)</div>
            <div className="bundle-size-value">
              {css.gzipFormatted || css.gzip}
            </div>
            <div className="bundle-size-subvalue">
              {css.formatted || css.raw} (raw)
            </div>
          </div>
        )}

        {total && (
          <div className="bundle-size-card">
            <div className="bundle-size-label">Total Size</div>
            <div className="bundle-size-value">
              {total.gzipFormatted || total.gzip}
            </div>
            <div className="bundle-size-subvalue">
              {total.formatted || total.raw} (raw)
            </div>
          </div>
        )}
      </div>

      <div className="bundle-info">
        💡 <strong>Tip:</strong> Sizes shown are gzipped (typical for
        production). Import only what you need to reduce bundle size.
      </div>
    </div>
  );
};
