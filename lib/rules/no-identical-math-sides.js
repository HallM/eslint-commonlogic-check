/**
 * @fileoverview Left and Right sides of most math operators should not be identical
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
            description: "Left and Right sides of most math operators should not be identical",
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

        // + and * are the only math operators ignored
        // because x + x and x * x does make sense
        var operatorsToCheck = [
            '-',
            '/',
            '%',
        ];

        var operatorErrors = {
            '-': 'x - x is always 0. This may be an error or can be reduced to just 0.',
            '/': 'x / x is always 1. This may be an error or can be reduced to just 1.',
            '%': 'x % x is always 0. This may be an error or can be reduced to just 0.'
        };

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        function checkMathExpression(node) {
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
            'BinaryExpression': checkMathExpression
        };
    }
};
