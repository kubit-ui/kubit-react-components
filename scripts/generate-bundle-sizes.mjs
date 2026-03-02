#!/usr/bin/env node

/**
 * Generate bundle size information for each component
 * This script analyzes the dist folder and generates a JSON file with size information
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { gzipSync } from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '../..');

// Paths
const distEsmDir = path.join(rootDir, 'dist/esm/components');
const outputFile = path.join(rootDir, '.storybook/bundle-sizes.json');

/**
 * Get file size in bytes
 */
function getFileSize(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.size;
  } catch (error) {
    return 0;
  }
}

/**
 * Get gzipped size of file
 */
function getGzipSize(filePath) {
  try {
    const content = fs.readFileSync(filePath);
    const gzipped = gzipSync(content);
    return gzipped.length;
  } catch (error) {
    return 0;
  }
}

/**
 * Format bytes to human readable
 */
function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}

/**
 * Get component files
 */
function getComponentFiles(componentPath) {
  const files = {
    css: [],
    js: [],
  };

  try {
    const entries = fs.readdirSync(componentPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(componentPath, entry.name);

      if (entry.isDirectory()) {
        // Recursively search subdirectories
        const subFiles = getComponentFiles(fullPath);
        files.css.push(...subFiles.css);
        files.js.push(...subFiles.js);
      } else if (entry.isFile()) {
        if (entry.name.endsWith('.css')) {
          files.css.push(fullPath);
        } else if (entry.name.endsWith('.js')) {
          files.js.push(fullPath);
        }
      }
    }
  } catch (error) {
    // Directory doesn't exist
  }

  return files;
}

/**
 * Calculate sizes for a component
 */
function calculateComponentSizes(componentName, componentPath) {
  const files = getComponentFiles(componentPath);

  let jsSize = 0;
  let jsGzipSize = 0;
  let cssSize = 0;
  let cssGzipSize = 0;

  // Sum JS files
  for (const file of files.js) {
    jsSize += getFileSize(file);
    jsGzipSize += getGzipSize(file);
  }

  // Sum CSS files
  for (const file of files.css) {
    cssSize += getFileSize(file);
    cssGzipSize += getGzipSize(file);
  }

  const totalSize = jsSize + cssSize;
  const totalGzipSize = jsGzipSize + cssGzipSize;

  return {
    component: componentName,
    sizes: {
      js: {
        raw: jsSize,
        gzip: jsGzipSize,
        formatted: formatBytes(jsSize),
        gzipFormatted: formatBytes(jsGzipSize),
      },
      css: {
        raw: cssSize,
        gzip: cssGzipSize,
        formatted: formatBytes(cssSize),
        gzipFormatted: formatBytes(cssGzipSize),
      },
      total: {
        raw: totalSize,
        gzip: totalGzipSize,
        formatted: formatBytes(totalSize),
        gzipFormatted: formatBytes(totalGzipSize),
      },
    },
    treeshakeable: true, // All ESM exports are treeshakeable
    timestamp: new Date().toISOString(),
  };
}

/**
 * Main function
 */
function main() {
  console.log('📦 Generating bundle size information...\n');

  if (!fs.existsSync(distEsmDir)) {
    console.warn('⚠️  Warning: dist/esm/components directory not found.');
    console.warn(
      '   Creating empty bundle-sizes.json. Run `pnpm dist` to populate.\n',
    );

    // Create empty bundle sizes file
    const emptyOutput = {
      metadata: {
        generated: new Date().toISOString(),
        totalComponents: 0,
        totalSize: {
          raw: 0,
          gzip: 0,
          formatted: '0 B',
          gzipFormatted: '0 B',
        },
      },
      components: {},
    };

    const storybookDir = path.dirname(outputFile);
    if (!fs.existsSync(storybookDir)) {
      fs.mkdirSync(storybookDir, { recursive: true });
    }

    fs.writeFileSync(outputFile, JSON.stringify(emptyOutput, null, 2));
    console.log('📄 Created empty bundle-sizes.json\n');
    return;
  }

  const components = fs
    .readdirSync(distEsmDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  const bundleSizes = {};
  let totalComponents = 0;
  let totalSize = 0;
  let totalGzipSize = 0;

  for (const component of components) {
    const componentPath = path.join(distEsmDir, component);
    const sizeInfo = calculateComponentSizes(component, componentPath);

    bundleSizes[component] = sizeInfo;
    totalComponents++;
    totalSize += sizeInfo.sizes.total.raw;
    totalGzipSize += sizeInfo.sizes.total.gzip;

    console.log(
      `✓ ${component.padEnd(20)} ${sizeInfo.sizes.total.gzipFormatted} (gzip)`,
    );
  }

  // Add metadata
  const output = {
    metadata: {
      generated: new Date().toISOString(),
      totalComponents,
      totalSize: {
        raw: totalSize,
        gzip: totalGzipSize,
        formatted: formatBytes(totalSize),
        gzipFormatted: formatBytes(totalGzipSize),
      },
    },
    components: bundleSizes,
  };

  // Write to file
  const storybookDir = path.dirname(outputFile);
  if (!fs.existsSync(storybookDir)) {
    fs.mkdirSync(storybookDir, { recursive: true });
  }

  fs.writeFileSync(outputFile, JSON.stringify(output, null, 2));

  console.log(`\n✨ Bundle sizes generated successfully!`);
  console.log(`📊 Total components: ${totalComponents}`);
  console.log(
    `📦 Total size: ${formatBytes(totalSize)} (raw) / ${formatBytes(totalGzipSize)} (gzip)`,
  );
  console.log(`📄 Output: ${path.relative(rootDir, outputFile)}\n`);
}

main();
