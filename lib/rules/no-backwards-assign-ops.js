/**
 * @fileoverview Catches typos like =+ and =- that should be += and -=
 * @author Matt Hall
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Catches typos like =+ and =- that should be += and -=",
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

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        function checkAssignment(node) {
            if (node.operator !== '=') {
                return;
            }

            if (node.right.type !== 'UnaryExpression' || node.right.prefix === false) {
                return;
            }

            if (node.right.operator !== '+' && node.right.operator !== '-') {
                return;
            }

            // at this point, we know we have roughly =+ or =-
            // but we don't know the whitespace

            // if there is no whitespace, then it MAY be possible
            var equalsToken = sourceCode.getTokenBefore(node.right);
            var unaryOpToken = sourceCode.getTokenBefore(node.right.argument);

            if (!sourceCode.isSpaceBetweenTokens(equalsToken, unaryOpToken)) {
                var possibleOperator = node.right.operator + node.operator;
                var foundOperator = node.operator + node.right.operator;

                context.report({
                    node: node,
                    message: "Detected '{{ foundOperator }}' which may be a typo for '{{ possibleOperator }}'." +
                        "If this is not a typo, add white space between the '=' and '{{ rightOperator }}' to ignore.",
                    data: {
                        foundOperator: foundOperator,
                        possibleOperator: possibleOperator,
                        rightOperator: node.right.operator
                    }
                });
            }
        }

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            "AssignmentExpression": checkAssignment
        };
    }
};
