/**
 * @fileoverview Prevents comparing numbers and booleans and also using numerical comparisons on booleans
 * @author Matt Hall
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Prevents comparing numbers and booleans and also using numerical comparisons on booleans",
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
        var equalityOperators = [
            '==',
            '!=',
            '===',
            '!=='
        ];

        var comparisonOperators = [
            '>',
            '>=',
            '<',
            '<='
        ];

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        function checkComparison(node) {
            if (node.left.type === "Literal" && typeof node.left.value === "boolean") {
                context.report({
                    node: node,
                    message: "Cannot use the '{{ operator }}' comparison with a boolean literal.",
                    data: {
                        operator: node.operator
                    }
                });
            }

            if (node.right.type === "Literal" && typeof node.right.value === "boolean") {
                context.report({
                    node: node,
                    message: "Cannot use the '{{ operator }}' comparison with a boolean literal.",
                    data: {
                        operator: node.operator
                    }
                });
            }
        }

        function checkEqualityComparison(node) {
            // for this, both have to be literals
            // and it has to be a bool with a nonbool

            if (node.left.type !== "Literal" || node.right.type !== "Literal") {
                return;
            }

            var leftType = typeof node.left.value;
            var rightType = typeof node.right.value;

            if (leftType !== rightType && (leftType === "boolean" || rightType === "boolean")) {
                context.report({
                    node: node,
                    message: "Cannot compare a boolean literal to a non-boolean literal."
                });
            }
        }

        function checkBinaryExpression(node) {
            var operator = node.operator;

            if (equalityOperators.indexOf(operator) !== -1) {
                checkEqualityComparison(node);
            } else if (comparisonOperators.indexOf(operator) !== -1) {
                checkComparison(node);
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
