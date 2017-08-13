/**
 * @fileoverview Prevents unchecked indexOf which should be tested against -1 not 0
 * @author Matt Hall
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Prevents unchecked indexOf which should be tested against -1 not 0",
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

        function isExpressionIndexOf(node) {
            if (node.type !== "CallExpression") {
                return false;
            }

            if (node.callee.type !== "MemberExpression") {
                return false;
            }

            if (node.callee.computed) {
                return false;
            }

            if (node.callee.property.type !== "Identifier") {
                return false;
            }

            if (node.callee.property.name !== "indexOf" && node.callee.property.name !== "lastIndexOf") {
                return false;
            }

            return true;
        }

        // only check Logical and test conditions of if's and loops
        function checkLogicalExpression(node) {
            if (isExpressionIndexOf(node.left)) {
                context.report({
                    node: node.left,
                    message: "Using {{fn}} without comparing to a number can be a common mistake. {{fn}} returns -1 for no match. It should be compared to a number to make sure it is correct.",
                    data: {
                        fn: node.left.callee.property.name
                    }
                });
            }

            if (isExpressionIndexOf(node.right)) {
                context.report({
                    node: node.right,
                    message: "Using {{fn}} without comparing to a number can be a common mistake. {{fn}} returns -1 for no match. It should be compared to a number to make sure it is correct.",
                    data: {
                        fn: node.right.callee.property.name
                    }
                });
            }
        }

        function checkTestableStatement(node) {
            if (isExpressionIndexOf(node.test)) {
                context.report({
                    node: node.test,
                    message: "Using {{fn}} without comparing to a number can be a common mistake. {{fn}} returns -1 for no match. It should be compared to a number to make sure it is correct.",
                    data: {
                        fn: node.test.callee.property.name
                    }
                });
            }
        }

        function checkUnaryExpression(node) {
            if (node.operator === "!" && isExpressionIndexOf(node.argument)) {
                context.report({
                    node: node.argument,
                    message: "Using {{fn}} without comparing to a number can be a common mistake. {{fn}} returns -1 for no match. It should be compared to a number to make sure it is correct.",
                    data: {
                        fn: node.argument.callee.property.name
                    }
                });
            }
        }

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            "WhileStatement": checkTestableStatement,
            "IfStatement": checkTestableStatement,
            "DoWhileStatement": checkTestableStatement,
            "ForStatement": checkTestableStatement,
            "ConditionalExpression": checkTestableStatement,
            "LogicalExpression": checkLogicalExpression,
            "UnaryExpression": checkUnaryExpression
        };
    }
};
