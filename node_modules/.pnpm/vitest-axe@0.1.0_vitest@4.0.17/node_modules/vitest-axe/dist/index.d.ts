export { A as AxeMatchers } from './to-have-no-violations-e1679411.js';
import AxeCore from 'axe-core';
export { default as AxeCore } from 'axe-core';

/**
 * Small wrapper for axe-core#run that enables promises, default options and
 * injects html to be tested
 *
 * @param options default options to use in all instances
 *   - `globalOptions`: Global axe-core configuration (See
 *     https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#api-name-axeconfigure)
 *   - Any other property will be passed as the runner configuration (See
 *     https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
 * @returns Instance of axe
 */
declare function configureAxe(options?: AxeCore.RunOptions & {
    globalOptions?: AxeCore.Spec;
}): (html: Element | string, additionalOptions?: AxeCore.RunOptions) => Promise<AxeCore.AxeResults>;
declare const axe: (html: Element | string, additionalOptions?: AxeCore.RunOptions) => Promise<AxeCore.AxeResults>;

export { axe, configureAxe };
