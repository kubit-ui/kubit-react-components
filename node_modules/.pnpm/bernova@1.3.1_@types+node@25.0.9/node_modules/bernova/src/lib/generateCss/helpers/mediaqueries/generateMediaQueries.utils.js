const generateMediaQueries = (mediaRegister) => {
  let cssMediaStyles = '';
  Object.entries(mediaRegister).forEach(([mediaName, mediaStyles]) => {
    cssMediaStyles += `@media ${mediaName} {\n${mediaStyles}}\n`;
  });
  return cssMediaStyles;
};

module.exports = { generateMediaQueries };
