export const getAllCommentsFromNodes = (nodes) => nodes.reduce((acc, node) => {
    if (Array.isArray(node.leadingComments) &&
        node.leadingComments.length > 0) {
        acc = [...acc, ...node.leadingComments];
    }
    return acc;
}, []);
