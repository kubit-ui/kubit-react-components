/**
 * Utility functions for dynamic CSS keyframes injection
 * Handles the conversion from keyframe strings to actual CSS animations
 */

// Cache for generated keyframes to avoid duplicates
const keyframesCache = new Map<string, string>();
let keyframeCounter = 0;

/**
 * Generate a unique keyframes name
 */
const generateKeyframeName = (content: string): string => {
  // Create a simple hash from the content for caching
  const hash = content.replace(/\s+/g, '').substring(0, 50);
  const cached = keyframesCache.get(hash);

  if (cached) {
    return cached;
  }

  const name = `popover-animation-${++keyframeCounter}`;
  keyframesCache.set(hash, name);
  return name;
};

/**
 * Inject keyframes into the document head
 * Returns the generated animation name to use in CSS
 */
export const injectKeyframes = (keyframesString: string): string => {
  if (!keyframesString || keyframesString.trim() === '') {
    return '';
  }

  const animationName = generateKeyframeName(keyframesString);

  // Check if this keyframe is already injected
  const existingStyle = document.head.querySelector(
    `[data-keyframes="${animationName}"]`,
  );
  if (existingStyle) {
    return animationName;
  }

  // Create and inject the style element
  const styleElement = document.createElement('style');
  styleElement.setAttribute('data-keyframes', animationName);
  styleElement.textContent = `
    @keyframes ${animationName} {
      ${keyframesString}
    }
  `;

  document.head.appendChild(styleElement);

  return animationName;
};

/**
 * Clean up injected keyframes (for unmounting components)
 */
export const cleanupKeyframes = (animationName: string): void => {
  if (!animationName) {
    return;
  }

  const styleElement = document.head.querySelector(
    `[data-keyframes="${animationName}"]`,
  );
  if (styleElement) {
    document.head.removeChild(styleElement);
  }
};
