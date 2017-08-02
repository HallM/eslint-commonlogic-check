/**
 * @fileoverview Checks if two switch cases have the same code
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
            description: "Checks if two switch cases have the same code",
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

        function areCasesEquivalent(caseOne, caseTwo) {
            var caseOneConsequent = caseOne.consequent;
            var caseTwoConsequent = caseTwo.consequent;

            var numOfCaseStatements = caseOneConsequent.length;

            // different lengths, then we know for certain they are different
            if (numOfCaseStatements !== caseTwoConsequent.length) {
                return false;
            }

            if (numOfCaseStatements === 0) {
                // ignore 0 length cases, they are just fall throughs
                return false;
            }

            var i = 0;

            // iterate through looking if any statement doesn't match in the other case
            for (i = 0; i < numOfCaseStatements; i++) {
                if (!areExpressionsEquivalent(caseOneConsequent[i], caseTwoConsequent[i])) {
                    return false;
                }
            }

            // if they all matched, then it is exactly the same
            return true;
        }

        function checkSwitchStatement(switchNode) {
            var switchCases = switchNode.cases;
            var numOfCases = switchCases.length;

            var i;
            var j;

            // only check against the previous cases
            for (i = 1; i < numOfCases; i++) {
                for (j = 0; j < i; j++) {
                    if (areCasesEquivalent(switchCases[i], switchCases[j])) {
                        context.report(switchCases[j], "The switch case body is a duplicate of another case. Check for any errors and ignore if this is not an issue.");
                        break;
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
