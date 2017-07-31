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

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        function checkAssignmentExpression(node) {
            if (node.right.type !== "UpdateExpression") {
                return;
            }

            if (areExpressionsEquivalent(node.left, node.right.argument)) {
                context.report({
                    node: node,
                    message: "Should not combine an assignment with the {{direction}} of the left hand side. The original value would immediately overwrite the {{direction}}ed value.",
                    data: {
                        direction: node.right.operator === '++' ? 'increment' : 'decrement'
                    }
                });
            }
        }

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            "AssignmentExpression": checkAssignmentExpression
        };
    }
};
