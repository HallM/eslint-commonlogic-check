/**
 * @fileoverview Using x % 2 == 1 for an even/odd check will not work if x is negative.
 * @author Matt Hall
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Using x % 2 == 1 for an even/odd check will not work if x is negative.",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        function isNumber(node, number) {
            if (node.type === "Literal") {
                if (node.value === number) {
                    return true;
                }

                if (node.value === number.toString()) {
                    return true;
                }

                // yes, since even true gives us a 1, may as well check it too
                if (number === 1 && node.value === true) {
                    return true;
                }

                if (number === 0 && node.value === false) {
                    return true;
                }
            }

            // also checking for -1 and +1
            if (node.type === "UnaryExpression") {
                if (node.operator === '-' || node.operator === '+') {
                    return isNumber(node.argument, 1);
                }

                if (node.operator === '!' || node.operator === '~') {
                    return isNumber(node.argument, 0);
                }
            }

            return false;
        }

        function isModulo2(node) {
            if (node.type !== "BinaryExpression") {
                return false;
            }

            if (node.operator !== "%") {
                return false;
            }

            return isNumber(node.right, 2);
        }

        function checkBinaryExpression(node) {
            if (node.operator !== '==' && node.operator !== '===') {
                return;
            }

            // one of the sides must be a one
            var isLeftSideOne = false;
            var isRightSideOne = false;

            if (isNumber(node.left, 1)) {
                isLeftSideOne = true;
            }

            if (isNumber(node.right, 1)) {
                isRightSideOne = true;
            }

            // if neither are 1, then it is fine
            if (!isLeftSideOne && !isRightSideOne) {
                return;
            }

            // if they are both 1, the expression is useless (always true),
            // but that is for another rule to catch
            if (isLeftSideOne && isRightSideOne) {
                return;
            }

            if ((isLeftSideOne && isModulo2(node.right)) || (isRightSideOne && isModulo2(node.left))) {
                context.report(node, "Using x % 2 == 1 for an odd check does not properly work when x is negative as the result would be -1 instead of 1. Consider uing x % 2 != 0 or x & 1 == 1 for a more complete odd check.");
            }
        }

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            "BinaryExpression": checkBinaryExpression
        };
    }
};
