import {
  matcherHint,
  printReceived
} from "./chunk-X4FZIUYL.js";

// src/to-have-no-violations.ts
import chalk from "chalk";
function toHaveNoViolations(results) {
  if (typeof results.violations === "undefined") {
    throw new Error("No violations found in aXe results object");
  }
  let violations = filterViolations(results.violations, results.toolOptions ? results.toolOptions.impactLevels : []);
  function reporter(violations2) {
    if (violations2.length === 0) {
      return [];
    }
    let lineBreak = "\n\n";
    let horizontalLine = "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500";
    return violations2.map((violation) => {
      let errorBody = violation.nodes.map((node) => {
        let selector = node.target.join(", ");
        let expectedText = `Expected the HTML found at $('${selector}') to have no violations:` + lineBreak;
        return expectedText + chalk.grey(node.html) + lineBreak + `Received:` + lineBreak + printReceived(`${violation.help} (${violation.id})`) + lineBreak + chalk.yellow(node.failureSummary) + lineBreak + (violation.helpUrl ? `You can find more information on this issue here: 
${chalk.blue(violation.helpUrl)}` : "");
      }).join(lineBreak);
      return errorBody;
    }).join(lineBreak + horizontalLine + lineBreak);
  }
  let formatedViolations = reporter(violations);
  let pass = formatedViolations.length === 0;
  function message() {
    if (pass) {
      return;
    }
    return matcherHint(".toHaveNoViolations") + `

${formatedViolations}`;
  }
  return { actual: violations, message, pass };
}
function filterViolations(violations, impactLevels) {
  if (impactLevels && impactLevels.length > 0) {
    return violations.filter((v) => impactLevels.includes(v.impact));
  }
  return violations;
}
export {
  toHaveNoViolations
};
