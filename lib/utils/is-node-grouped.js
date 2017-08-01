"use strict";

module.exports = function isNodeGrouped(sourceCode, node) {
    var previousToken = sourceCode.getTokenBefore(node);
    var nextToken = sourceCode.getTokenAfter(node);

    return previousToken &&
        nextToken &&
        previousToken.type === "Punctuator" &&
        previousToken.value === "(" &&
        nextToken.type === "Punctuator" &&
        nextToken.value === ")";
};
