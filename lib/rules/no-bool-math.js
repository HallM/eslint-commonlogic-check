/**
 * @fileoverview Cannot using boolean literals in math expressions
 * @author Matt Hall
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Cannot using boolean literals in math expressions",
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
        var comparisonOperators = [
            '>',
            '>=',
            '<',
            '>=',
            '==',
            '===',
            '!=',
            '!=='
        ];

        var mathOperators = [
            '+',
            '-',
            '*',
            '/',
            '%',
            '<<',
            '>>',
            '>>>'
        ];

        // seems strange to keep these separate,
        // but doing it to provide different error messages
        var logicalOperators = [
            '&',
            '^',
            '|'
        ];

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        function isBoolean(node) {
            if (node.type === "Literal" && typeof node.value === "boolean") {
                return true;
            }

            // note: Logical Expressions do NOT necessarily return a boolean
            // they return the value of the left or right side
            if (node.type === "LogicalExpression") {
                // but if either side is a bool, then it's not right
                return isBoolean(node.left) || isBoolean(node.right);
            }

            // comparisons do always return booleans
            if (node.type === "BinaryExpression" && comparisonOperators.indexOf(node.operator) !== -1) {
                return true;
            }

            // only the not-unary could return a boolean if the negated thing was a boolean to begin with
            if (node.type === "UnaryExpression" && node.operator === "!") {
                return isBoolean(node.argument);
            }

            return false;
        }

        function checkBinaryExpression(node) {
            var operator = node.operator;

            var isMath = mathOperators.indexOf(operator) !== -1;
            var isBitLogic = logicalOperators.indexOf(operator) !== -1;

            if (!isMath && !isBitLogic) {
                return;
            }

            if (isMath) {
                if (isBoolean(node.left) || isBoolean(node.right)) {
                    context.report({
                        node: node,
                        message: "Cannot use boolean in math or bitwise expressions. Use 0 or 1 in the place of the boolean.",
                        data: {}
                    });
                }
            }

            if (isBitLogic) {
                if (isBoolean(node.left) || isBoolean(node.right)) {
                    context.report({
                        node: node,
                        message: "Using boolean with '{{ operator }}' may be an error. This may have been intended to be '{{ operator }}{{ operator }}' If using the bitwise version was intended, change the boolean out for a 0 or 1.",
                        data: {
                            operator: operator
                        }
                    });
                }
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
