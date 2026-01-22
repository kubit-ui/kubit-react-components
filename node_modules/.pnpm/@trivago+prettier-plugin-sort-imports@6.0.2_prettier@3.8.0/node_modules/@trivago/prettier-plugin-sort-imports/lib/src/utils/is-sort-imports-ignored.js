import { sortImportsIgnoredComment } from '../constants.js';
export const isSortImportsIgnored = (comments) => {
    return comments.some((comment) => comment.value.trimStart().startsWith(sortImportsIgnoredComment));
};
