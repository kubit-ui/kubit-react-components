const { extractValues } = require('./extractValues.utils');
const { processCssWithPostcss } = require('./processCss.utils');
const { separateStyles } = require('./separateStyles.utils');
const {
  validatePreviouslyExists,
} = require('./validatePreviouslyExists.utils');
const { formattedStatKey } = require('./formattedStatKey.utils');

module.exports = {
  extractValues,
  processCssWithPostcss,
  separateStyles,
  validatePreviouslyExists,
  formattedStatKey,
};
