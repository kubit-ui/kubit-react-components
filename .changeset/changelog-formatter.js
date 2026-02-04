/**
 * Custom Changesets changelog formatter for monorepo
 * Generates clean, professional changelog entries with PR links
 */

const getReleaseLine = async (changeset, _type, options) => {
  const [firstLine, ...futureLines] = changeset.summary
    .split("\n")
    .map((l) => l.trimEnd());

  // Extract PR number if present (format: "PR: #123")
  const prMatch = changeset.summary.match(/PR:\s*#(\d+)/);
  const prNumber = prMatch ? prMatch[1] : null;

  // Clean up the first line - remove conventional commit prefix and PR reference
  let cleanFirstLine = firstLine
    .replace(
      /^(feat|fix|docs|style|refactor|perf|test|chore|build|ci|break|breaking)(\(.+?\))?:\s*/i,
      "",
    )
    .replace(/PR:\s*#\d+/g, "")
    .trim();

  // Capitalize first letter
  cleanFirstLine =
    cleanFirstLine.charAt(0).toUpperCase() + cleanFirstLine.slice(1);

  // Build the changelog entry
  let returnVal = `- ${cleanFirstLine}`;

  // Add PR link if available
  if (prNumber && options?.repo) {
    returnVal += ` ([#${prNumber}](https://github.com/${options.repo}/pull/${prNumber}))`;
  }

  // Add additional lines if present (excluding PR reference line)
  const additionalLines = futureLines.filter(
    (line) => !line.match(/PR:\s*#\d+/),
  );
  if (additionalLines.length > 0) {
    returnVal += `\n${additionalLines.map((l) => `  ${l}`).join("\n")}`;
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
