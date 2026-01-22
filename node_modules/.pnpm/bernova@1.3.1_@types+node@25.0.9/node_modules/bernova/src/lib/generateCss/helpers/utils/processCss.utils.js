const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');
// const combineMediaQuery = require('postcss-combine-media-query'); // <- this plugin is not used in the provided code
const fontMagician = require('postcss-font-magician');
const path = require('path');

/**
 * Processes CSS with PostCSS using the configuration in postcss.config.js.
 *
 * @param {string} css - The CSS to process.
 * @param {boolean} [minified=false] - Whether to minify the CSS.
 * @param {string} [prefix=''] - The prefix to add to :root and all classes.
 * @param {Object} fonts - The fonts configuration.
 * @returns {Promise<string>} The processed CSS.
 */
const processCssWithPostcss = async (
  css,
  minified = false,
  prefix = '',
  fonts = {}
) => {
  const plugins = [
    postcssPresetEnv({
      stage: 0,
      autoprefixer: { grid: true },
      features: {
        'custom-properties': false, // <- Disable CSS variable resolution
      },
    }),
    autoprefixer({
      overrideBrowserslist: [
        '> 1%',
        'last 2 versions',
        'Firefox ESR',
        'not dead',
      ],
    }),
    // combineMediaQuery,
    fontMagician({
      variants: fonts?.google?.reduce((acc, font) => {
        acc[font.name] = font.weights.reduce((weights, weight) => {
          weights[weight] = [];
          return weights;
        }, {});
        return acc;
      }, {}),
      foundries: ['google', 'local'],
      custom: fonts?.local?.reduce((acc, font) => {
        acc[font.name] = {
          variants: Object.keys(font.files).reduce((variants, weight) => {
            variants[weight] = {
              normal: {
                url: {
                  ttf: path.join('fonts', path.basename(font.files[weight])),
                },
              },
            };
            return variants;
          }, {}),
        };
        return acc;
      }, {}),
    }),
  ];

  if (minified) {
    plugins.push(
      cssnano({
        preset: 'default',
      })
    );
  }

  if (prefix) {
    css = css.replace(/:root/g, `[data-theme='${prefix}']`);
    css = css.replace(/\.([a-zA-Z_][\w-]*)/g, (match, p1) => {
      if (css.includes(`@font-face`) || css.includes(`@import`)) {
        return match;
      }
      return `[data-theme='${prefix}'] .${p1}`;
    });
  }

  const result = await postcss(plugins).process(css, {
    from: undefined,
  });

  return result.css;
};

module.exports = { processCssWithPostcss };
