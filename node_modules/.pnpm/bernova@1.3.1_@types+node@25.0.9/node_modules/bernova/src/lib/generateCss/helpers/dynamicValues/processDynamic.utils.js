const processDynamicProps = (dynamic) => {
  if (Array.isArray(dynamic)) {
    return dynamic.reduce((acc, curr) => {
      acc[curr] = `var(--${curr.toLocaleLowerCase().replace('$', '')})`;
      return acc;
    }, {});
  }
};

module.exports = { processDynamicProps };
