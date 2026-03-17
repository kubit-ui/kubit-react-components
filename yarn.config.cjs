/**
 * Yarn Berry Constraints for Kubit React Components Monorepo.
 *
 * Run:
 *   yarn constraints       — check for violations
 *   yarn constraints --fix — auto-fix violations
 *
 * These rules guarantee workspace consistency as the monorepo grows.
 */

/** @type {import('@yarnpkg/types').defineConfig} */
module.exports = {
  async constraints({ Yarn }) {
    // ════════════════════════════════════════════════════════════════
    // Rule 1: Shared dependencies must use the same version range
    // ════════════════════════════════════════════════════════════════
    // When a package (e.g. typescript) appears in multiple workspaces,
    // all must declare the same version range. This prevents silent
    // version drift that leads to hard-to-debug inconsistencies.

    const depVersions = new Map();

    for (const dep of Yarn.dependencies()) {
      if (dep.type === 'peerDependencies') continue;
      if (dep.range === 'workspace:*') continue;

      if (!depVersions.has(dep.ident)) {
        depVersions.set(dep.ident, new Set());
      }
      depVersions.get(dep.ident).add(dep.range);
    }

    for (const [ident, ranges] of depVersions) {
      if (ranges.size <= 1) continue;

      // Pick the highest version range as the canonical one
      const sortedRanges = [...ranges].sort();
      const expectedRange = sortedRanges[sortedRanges.length - 1];

      for (const dep of Yarn.dependencies({ ident })) {
        if (dep.type === 'peerDependencies') continue;
        if (dep.range === 'workspace:*') continue;
        if (dep.range !== expectedRange) {
          dep.update(expectedRange);
        }
      }
    }

    // ════════════════════════════════════════════════════════════════
    // Rule 2: All sub-workspaces must declare required metadata
    // ════════════════════════════════════════════════════════════════

    for (const workspace of Yarn.workspaces()) {
      if (workspace.cwd === '.') continue;

      workspace.set('packageManager', 'yarn@4.9.1');
      workspace.set('engines.node', '22.x');
    }

    // ════════════════════════════════════════════════════════════════
    // Rule 3: Public packages must have publishConfig
    // ════════════════════════════════════════════════════════════════

    for (const workspace of Yarn.workspaces()) {
      if (workspace.cwd === '.') continue;
      if (workspace.manifest.private) continue;

      workspace.set('license', 'Apache-2.0');
      workspace.set('publishConfig.access', 'public');
      workspace.set('publishConfig.registry', 'https://registry.npmjs.org/');
    }

    // ════════════════════════════════════════════════════════════════
    // Rule 4: Workspace cross-references must use workspace:* protocol
    // ════════════════════════════════════════════════════════════════

    const workspaceIdents = new Set(
      Yarn.workspaces().map((ws) => ws.ident),
    );

    for (const dep of Yarn.dependencies()) {
      if (dep.type === 'peerDependencies') continue;
      if (!workspaceIdents.has(dep.ident)) continue;
      if (dep.range !== 'workspace:*') {
        dep.update('workspace:*');
      }
    }

    // ════════════════════════════════════════════════════════════════
    // Rule 5: No package should depend on itself
    // ════════════════════════════════════════════════════════════════

    for (const dep of Yarn.dependencies()) {
      if (dep.ident === dep.workspace.ident) {
        dep.error('A workspace must not depend on itself');
      }
    }
  },
};
