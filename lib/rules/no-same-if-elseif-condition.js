/**
 * @fileoverview If and Else if conditions should not be the exact same
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
            description: "If and Else if conditions should not be the exact same",
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

        function checkIfStatement(node) {
            // if there is no alternate, then there is no else-if
            if (!node.alternate) {
                return;
            }

            // if the alternate is not another if statement, then it is not an else-if
            if (node.alternate.type !== 'IfStatement') {
                return;
            }

            if (areExpressionsEquivalent(node.test, node.alternate.test)) {
                // TODO: could we figure out if it is two else-ifs or if+else-if based on parent nodes?
                context.report(node, 'The same test expression was used for an if and else-if (or two else-ifs). There may be a logic error.');
            }

            // no need to recurse, because the visitor pattern will check it for us anyway
        }

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            'IfStatement': checkIfStatement
        };
    }
};
