/**
 * @fileoverview Prevents two identical if statements next to each other
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
            description: "Prevents two identical if statements next to each other",
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

        function checkBody(body) {
            var numOfStatements = body.length;

            var i;
            var statementOne;
            var statementTwo;

            // start at 1, since we check 2 statements
            for (i = 1; i < numOfStatements; i++) {
                statementOne = body[i - 1];
                statementTwo = body[i];

                if (statementTwo.type !== 'IfStatement') {
                    // we can skip not just this one, but the next too
                    i++;
                    continue;
                }

                if (statementOne.type !== 'IfStatement') {
                    // only skip one
                    continue;
                }

                if (areExpressionsEquivalent(statementOne.test, statementTwo.test)) {
                    context.report({
                        node: statementTwo,
                        message: 'The same test expression was used for two neighboring If statements. This commonly is a logic error or can be optimized by merging the If statements.'
                    });
                }
            }
        }

        function checkProgram(node) {
            checkBody(node.body);
        }

        function checkBlockStatement(node) {
            checkBody(node.body);
        }

        function checkSwitchCase(node) {
            checkBody(node.consequent);
        }

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            "BlockStatement": checkBlockStatement,
            "Program": checkProgram,
            "SwitchCase": checkSwitchCase
        };
    }
};
