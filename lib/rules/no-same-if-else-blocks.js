/**
 * @fileoverview Catches an if-then block matches an else or else-if-then block
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
            description: "Catches an if-then block matches an else or else-if-then block",
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

        function checkIfStatement(node, firstNode) {
            // if there is no alternate, then there is no else to check
            if (!node.alternate) {
                return;
            }

            // if the alternate is an else-if, then we recurse check into that
            if (node.alternate.type === 'IfStatement') {
                if (areExpressionsEquivalent(node.alternate.consequent, firstNode.consequent)) {
                    context.report(node, 'The same then-statement was used for an if and an else-then or else-if-then statement. There may be a logic error or can be simplified.');
                }

                return checkIfStatement(node.alternate, firstNode);
            }

            if (areExpressionsEquivalent(node.alternate, firstNode.consequent)) {
                context.report(node, 'The same then-statement was used for an if and an else-then or else-if-then statement. There may be a logic error or can be simplified.');
            }

            // no need to recurse, because the visitor pattern will check it for us anyway
        }

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            "IfStatement": function(node) {
                checkIfStatement(node, node);
            }
        };
    }
};
