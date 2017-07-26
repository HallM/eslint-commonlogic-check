/**
 * @fileoverview Checks for assignments where x = x, which may be a bug
 * @author Matt Hall
 */
"use strict";

var areExpressionsEquivalent = require('../utils/are-expressions-equivalent');

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Checks for assignments where x = x, which may be a bug",
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
            if (node.operator !== '=') {
                // the other operators can make sense
                return;
            }

            if (areExpressionsEquivalent(node.left, node.right)) {
                // TODO: good way to get the lhs and provide better error message
                context.report(node, "A variable is set to itself, which may be a logic bug or a typo.");
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
