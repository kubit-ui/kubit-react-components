import { preprocessor } from './preprocessor.js';
export function defaultPreprocessor(code, options) {
    for (const extension of ['svelte', 'vue']) {
        if (options.filepath?.endsWith(`.${extension}`))
            return code;
    }
    return preprocessor(code, options);
}
