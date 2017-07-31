/**
 * @fileoverview Checks for identical Left and Right hand side for binary expressions
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
            description: "Checks for identical Left and Right hand side for binary expressions",
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
        var operatorsToCheck = [
            '==',
            '===',
            '!=',
            '!==',
            '>=',
            '<=',
            '>',
            '<'
        ];

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        function checkComparisonExpression(node) {
            var operator = node.operator;

            // check if we need to investigate this node or not
            if (operatorsToCheck.indexOf(operator) === -1) {
                return;
            }

            if (areExpressionsEquivalent(node.left, node.right)) {
              context.report(node, 'Left and right hand sides of "' + operator + '" are identical which may be an error.');
            }
        }

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            'BinaryExpression': checkComparisonExpression
        };
    }
};
