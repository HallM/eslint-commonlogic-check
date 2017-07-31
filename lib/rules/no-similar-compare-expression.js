/**
 * @fileoverview Prevents the same return from a comparison expression (?: operator)
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
            description: "Prevents the same return from a comparison expression (?: operator)",
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

        function checkConditionalExpression(node) {
            if (areExpressionsEquivalent(node.consequent, node.alternate)) {
                context.report(node, 'The same expression was used for both potential values of a conditional expression. This may be a logic error.');
            }
        }

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            'ConditionalExpression': checkConditionalExpression
        };
    }
};
