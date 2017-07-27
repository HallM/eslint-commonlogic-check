/**
 * @fileoverview A modulo by 1 is always 0
 * @author Matt Hall
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "A modulo by 1 is always 0",
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

        function isNumber(node, number) {
            if (node.type === "Literal") {
                if (node.value === number) {
                    return true;
                }

                if (node.value === number.toString()) {
                    return true;
                }

                // yes, since even true gives us a 1, may as well check it too
                if (number === 1 && node.value === true) {
                    return true;
                }

                if (number === 0 && node.value === false) {
                    return true;
                }
            }

            // also checking for -1 and +1
            if (node.type === "UnaryExpression") {
                if (node.operator === '-' || node.operator === '+') {
                    return isNumber(node.argument, 1);
                }

                if (node.operator === '!' || node.operator === '~') {
                    return isNumber(node.argument, 0);
                }
            }

            return false;
        }

        function checkBinaryExpression(node) {
            if (node.operator !== '%') {
                return;
            }

            if (isNumber(node.right, 1)) {
                context.report(node, "x % 1 is always 0. This may be an error or can be reduced to 0.");
            }
        }

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            "BinaryExpression": checkBinaryExpression
        };
    }
};
