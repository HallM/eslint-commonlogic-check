/**
 * @fileoverview Prevents a situation of A || (A && B) as the 2nd half is always false
 * @author Matt Hall
 */
"use strict";

var areExpressionsEquivalent = require('../utils/ast-equality').checkEquality;

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Prevents a situation of A || (A && B) as the 2nd half is always false",
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

        function isAndLogicalExpression(node) {
            return node.type === "LogicalExpression" && node.operator === "&&";
        }

        function checkLogicalExpression(node) {
            if (node.operator !== "||") {
                return;
            }

            if (isAndLogicalExpression(node.left)) {
                if (areExpressionsEquivalent(node.left.left, node.right)) {
                    context.report(
                        node,
                        "Detected the pattern (A && B) || A which may be an error. This is the same as just (A && B)."
                    );
                } else if (areExpressionsEquivalent(node.left.right, node.right)) {
                    context.report(
                        node,
                        "Detected the pattern (B && A) || A which may be an error. This is the same as just (B && A)."
                    );
                }
            } else if (isAndLogicalExpression(node.right)) {
                if (areExpressionsEquivalent(node.right.left, node.left)) {
                    context.report(
                        node,
                        "Detected the pattern A || (A && B) which may be an error. This is the same as just A. B will never run."
                    );
                } else if (areExpressionsEquivalent(node.right.right, node.left)) {
                    context.report(
                        node,
                        "Detected the pattern A || (B && A) which may be an error. The result is just A, but B's side effects may run still."
                    );
                }
            }
        }

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            "LogicalExpression": checkLogicalExpression
        };
    }
};
