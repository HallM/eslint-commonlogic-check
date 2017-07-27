/**
 * @fileoverview Prevents most bitwise operations with left and right being identical.
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
            description: "Prevents most bitwise operations with left and right being identical.",
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

        var operatorErrors = {
            '|': 'x | x is the same as x. This may be an error or can be reduced to just x.',
            '&': 'x & x is the same as x. This may be an error or can be reduced to just x.',
            '^': 'x ^ x is always 0. This may be an error or can be reduced to just 0.'
        };
        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        function checkBitwiseExpression(node) {
            var operator = node.operator;

            var potentialError = operatorErrors[operator];

            // check if we need to investigate this node or not
            if (!potentialError) {
                return;
            }

            if (areExpressionsEquivalent(node.left, node.right)) {
                context.report({
                    node: node,
                    message: 'Left and right hand sides of "{{ operator }}" are identical. {{ extraError }}',
                    data: {
                        operator: operator,
                        extraError: potentialError
                    }
                });
            }
        }

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            'BinaryExpression': checkBitwiseExpression
        };
    }
};
