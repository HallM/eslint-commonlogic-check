/**
 * @fileoverview Prevents misunderstandings of operator precedence with x << y + z
 * @author Matt Hall
 */
"use strict";

var isNodeGrouped = require('../utils/is-node-grouped');

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Prevents misunderstandings of operator precedence with x << y + z",
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

        var sourceCode = context.getSourceCode();

        var shiftOps = [
            "<<",
            ">>",
            ">>>"
        ];

        var addOps = [
            "+",
            "-"
        ];

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        function isShiftOp(operator) {
            return shiftOps.indexOf(operator) !== -1;
        }

        function isAddOp(operator) {
            return addOps.indexOf(operator) !== -1;
        }

        function checkBinaryExpression(node) {
            var leftOp = node.operator;
            if (!isShiftOp(node.operator)) {
                return;
            }

            if (node.right.type !== "BinaryExpression" || !isAddOp(node.right.operator)) {
                return;
            }

            var rightOp = node.right.operator;

            // now check if there for parenthesis
            if (isNodeGrouped(sourceCode, node.right)) {
                return;
            }

            context.report({
                node: node,
                message: "x {{leftOp}} y {{rightOp}} z will be parsed as x {{leftOp}} (y {{rightOp}} z). This might be correct, but may have intended (x {{leftOp}} y) {{rightOp}} z. Use parenthesis to clarify.",
                data: {
                    leftOp: leftOp,
                    rightOp: rightOp
                }
            });
        }

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            "BinaryExpression": checkBinaryExpression
        };
    }
};
