import AxeCore from 'axe-core';

interface MatcherResult {
    message(): string;
    pass: boolean;
}

/**
 * A custom matcher that can check aXe results for violations.
 *
 * @param results requires an instance of aXe's
 * [results object](https://github.com/dequelabs/axe-core/blob/develop-2x/doc/API.md#results-object)
 * @returns Vitest matcher object
 */
declare function toHaveNoViolations(results: AxeCore.AxeResults): NoViolationsMatcherResult;
interface NoViolationsMatcherResult extends MatcherResult {
    actual: AxeCore.Result[];
}
interface AxeMatchers {
    /**
     * A custom matcher that can check aXe results for violations.
     */
    toHaveNoViolations(): NoViolationsMatcherResult;
}

export { AxeMatchers as A, NoViolationsMatcherResult as N, toHaveNoViolations as t };
