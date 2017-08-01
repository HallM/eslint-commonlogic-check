/**
 * @fileoverview Prevents comparing a comparison which may not operate as expected
 * @author Matt Hall
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Prevents comparing a comparison which may not operate as expected",
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

        var possibleOperators = [
            ">",
            ">=",
            "<",
            "<=",
            "==",
            "===",
            "!=",
            "!=="
        ];

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        function isComparisonNode(node) {
            return possibleOperators.indexOf(node.operator) !== -1;
        }

        function checkBinaryExpression(node) {
            if (!isComparisonNode(node)) {
                return;
            }

            // only applies if one of the two are binary expressions with a comparison

            if (node.left.type === "BinaryExpression" && isComparisonNode(node.left)) {
                context.report(
                    node,
                    "A comparison of the result from a comparison may not work as intended. 3 > 2 > 1 is false and should instead be 3 > 2 && 2 > 1."
                );
            } else if (node.right.type === "BinaryExpression" && isComparisonNode(node.right)) {
                context.report(
                    node.right,
                    "A comparison of the result from a comparison may not work as intended. 3 > 2 > 1 is false and should instead be 3 > 2 && 2 > 1."
                );
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
