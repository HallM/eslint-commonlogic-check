"use strict";

module.exports = {
    extends: [
        "plugin:checkbugs/base",
    ],
    rules: {
        "checkbugs/no-backwards-assign-ops": 1,
        "checkbugs/no-bad-odd-checks": 2,
        "checkbugs/no-bool-math": 2,
        "checkbugs/no-bool-num-compares": 2,
        "checkbugs/no-comma-in-indexing": 2,
        "checkbugs/no-double-comparison": 2,
        "checkbugs/no-emptyexpr-choice-loop": 2,
        "checkbugs/no-identical-bitwise-sides": 2,
        "checkbugs/no-identical-comparison-sides": 2,
        "checkbugs/no-identical-logical-sides": 2,
        "checkbugs/no-identical-math-sides": 1,
        "checkbugs/no-invalid-sharedlogic-part": 2,
        "checkbugs/no-modulo-one": 1,
        "checkbugs/no-modulo-then-multiply": 1,
        "checkbugs/no-overwritten-increment": 2,
        "checkbugs/no-same-assignment": 2,
        "checkbugs/no-same-if-else-blocks": 1,
        "checkbugs/no-same-if-elseif-condition": 2,
        "checkbugs/no-same-switchcase-blocks": 1,
        "checkbugs/no-same-switchcase-condition": 2,
        "checkbugs/no-similar-compare-expression": 2,
        "checkbugs/no-triple-negation": 2,
        "checkbugs/no-ungrouped-bshift-add": 1,
        "checkbugs/no-useless-zeros": 1
    }
};
