// Main entry point for Bernova package
const lib = require('./lib');
const constants = require('./constants');
const { bernovaStyles } = require('./app');

// Export the main functionality
module.exports = {
  // Main function
  bernovaStyles,

  // Library functions
  ...lib,

  // Constants
  ...constants,

  // Direct access to modules
  lib,
  constants,
};
