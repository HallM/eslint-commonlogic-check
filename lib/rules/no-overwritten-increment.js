/**
 * @fileoverview Do not allow setting a variable to the increment or decrement of itself
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
            description: "Do not allow setting a variable to the increment or decrement of itself",
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
        var assignmentStack = [];

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        function isBeingAssigned(node) {
            var length = assignmentStack.length;
            var i;

            // iterate backwards, to search the nearest ancestor first
            for (i = 0; i < length; i++) {
                if (areExpressionsEquivalent(node, assignmentStack[i].left)) {
                    return true;
                }
            }

            return false;
        }

        function checkUpdateExpression(node) {
            // pre-inc and pre-dec are not affected, only post-inc/dec
            if (node.prefix) {
                return;
            }

            if (isBeingAssigned(node.argument)) {
                context.report({
                    node: node,
                    message: "Should not combine an assignment with the {{direction}} of the left hand side. The original value would immediately overwrite the {{direction}}ed value.",
                    data: {
                        direction: node.operator === '++' ? 'increment' : 'decrement'
                    }
                });
            }
        }

        function enterAssignment(node) {
            assignmentStack.push(node);
        }

        function exitAssignment(node) {
            assignmentStack.pop();
        }

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            "UpdateExpression": checkUpdateExpression,

            "AssignmentExpression": enterAssignment,
            "AssignmentExpression:exit": exitAssignment
        };
    }
};
