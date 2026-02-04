/**
 * Custom Changesets changelog formatter for monorepo
 * Generates clean, professional changelog entries without technical noise
 */

const getReleaseLine = async (changeset, _type) => {
  const [firstLine, ...futureLines] = changeset.summary
    .split("\n")
    .map((l) => l.trimEnd());

  // Clean up the first line - remove conventional commit prefix if present
  let cleanFirstLine = firstLine
    .replace(
      /^(feat|fix|docs|style|refactor|perf|test|chore|build|ci|break|breaking)(\(.+?\))?:\s*/i,
      "",
    )
    .trim();

  // Capitalize first letter
  cleanFirstLine =
    cleanFirstLine.charAt(0).toUpperCase() + cleanFirstLine.slice(1);

  let returnVal = `- ${cleanFirstLine}`;

  if (futureLines.length > 0) {
    returnVal += `\n${futureLines.map((l) => `  ${l}`).join("\n")}`;
  }

  return returnVal;
};

const getDependencyReleaseLine = async (changesets, dependenciesUpdated) => {
  if (dependenciesUpdated.length === 0) return "";

  const updatedDependencies = dependenciesUpdated.map(
    (dependency) => `  - ${dependency.name}@${dependency.newVersion}`,
  );

  return `- Updated dependencies\n${updatedDependencies.join("\n")}`;
};

module.exports = {
  getReleaseLine,
  getDependencyReleaseLine,
};
