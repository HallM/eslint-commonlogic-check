/**
 * @fileoverview Prevents expressions with one operand of 0 which are useless
 * @author Matt Hall
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Prevents expressions with one operand of 0 which are useless",
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
        var potentialRhzErrors = {
            "+": "The right side is 0. x + 0 is just x. This may be an error or can be reduced to x.",
            "-": "The right side is 0. x - 0 is just x. This may be an error or can be reduced to x.",
            "*": "The right side is 0. x * 0 is always 0. This may be an error or can be reduced to 0.",
            "/": "The right side is 0. Cannot divide by 0.",
            "%": "The right side is 0. Cannot use modulo by 0, as this is a divide by 0.",

            "&": "The right side is 0. x & 0 is always 0. This may be an error or can be reduced to 0.",
            "|": "The right side is 0. x | 0 is just x. This may be an error or can be reduced to x.",
            "^": "The right side is 0. x ^ 0 is just x. This may be an error or can be reduced to x.",
            "<<": "The right side is 0. x << 0 is just x. This may be an error or can be reduced to x.",
            ">>": "The right side is 0. x >> 0 is just x. This may be an error or can be reduced to x.",
            ">>>": "The right side is 0. x >>> 0 is just x. This may be an error or can be reduced to x."
        };

        var potentialLhzErrors = {
            "+": "The left side is 0. 0 + x is just x. This may be an error or can be reduced to x.",
            "-": "The left side is 0. 0 - x is just -x. This may be an error or can be reduced to -x.",
            "*": "The left side is 0. 0 * x is always 0. This may be an error or can be reduced to 0.",
            "/": "The left side is 0. 0 / x is always 0. This may be an error or can be reduced to 0.",
            "%": "The left side is 0. 0 % x is always 0. This may be an error or can be reduced to 0.",

            "&": "The left side is 0. 0 & x is always 0. This may be an error or can be reduced to 0.",
            "|": "The left side is 0. 0 | x is just x. This may be an error or can be reduced to x.",
            "^": "The left side is 0. 0 ^ x is just x. This may be an error or can be reduced to x.",
            "<<": "The left side is 0. 0 << x is always 0. This may be an error or can be reduced to 0.",
            ">>": "The left side is 0. 0 >> x is always 0. This may be an error or can be reduced to 0.",
            ">>>": "The left side is 0. 0 >>> x is always 0. This may be an error or can be reduced to 0."
        };

        // not checking + and - as I cannot be certain if someone needs negative zero
        var potentialUnaryErrors = {
            "!": "The value is 0. !0 is always 1. This may be an error or can be reduced to 1.",
            "~": "The value is 0. ~0 is always -1. This may be an error or can be reduced to -1.",
        };

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        function isZero(node, canBeStringZero) {
            // TODO: could it form zero, like 3 - 3?

            if (node.type === 'Literal') {
                if (node.value === 0) {
                    return true;
                }

                if (node.value === false) {
                    return true;
                }

                if (canBeStringZero && parseFloat(node.value) === 0) {
                    return true;
                }

                if (canBeStringZero && parseInt(node.value) === 0) {
                    return true;
                }
            }

            return false;
        }

        function checkBinaryExpression(node) {
            var operator = node.operator;

            var canBeStringZero = operator !== "+";

            if (isZero(node.left, canBeStringZero)) {
                var potentialLhzError = potentialLhzErrors[operator];

                if (potentialLhzError) {
                    context.report(node, potentialLhzError);
                }
            }

            if (isZero(node.right, canBeStringZero)) {
                var potentialRhzError = potentialRhzErrors[operator];

                if (potentialRhzError) {
                    context.report(node, potentialRhzError);
                }
            }
        }

        function checkUnaryExpression(node) {
            var operator = node.operator;

            // not sure if there are any postfix, non-updating unary operators
            if (!node.prefix) {
                return;
            }

            if (isZero(node.argument, true)) {
                var potentialError = potentialUnaryErrors[operator];

                if (potentialError) {
                    context.report(node, potentialError);
                }
            }
        }

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            "BinaryExpression": checkBinaryExpression,
            "UnaryExpression": checkUnaryExpression
        };
    }
};
