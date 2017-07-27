/**
 * @fileoverview Prevents two cases from having the same condition
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
            description: "Prevents two cases from having the same condition",
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

        function checkSwitchStatement(switchNode) {
            var switchCases = switchNode.cases;
            var numOfCases = switchCases.length;

            var i = 0;
            var j = 0;

            for (i = 0; i < numOfCases; i++) {
                for (j = i + 1; j < numOfCases; j++) {
                    // multiple default clauses is already a parsing error, btw
                    if (areExpressionsEquivalent(switchCases[i].test, switchCases[j].test)) {
                        context.report(switchCases[j], "The switch case condition is already used above. This case will never execute and may be an error.");
                    }
                }
            }
        }

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            "SwitchStatement": checkSwitchStatement
        };
    }
};
