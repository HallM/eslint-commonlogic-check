/**
 * @fileoverview Left and Right sides of a Logical Expression should not be identical
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
            description: "Left and Right sides of a Logical Expression should not be identical",
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

        function checkLogicalExpression(node) {
            var operator = node.operator;

            if (areExpressionsEquivalent(node.left, node.right)) {
                context.report(node, 'Left and right hand sides of "' + operator + '" are identical which may be a logic error.');
            }
        }

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            'LogicalExpression': checkLogicalExpression
        };
    }
};
