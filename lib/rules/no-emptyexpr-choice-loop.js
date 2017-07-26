/**
 * @fileoverview Cannot have a semicolon, or an empty expression, for a loop or choice statement block
 * @author Matt Hall
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Cannot have a semicolon, or an empty expression, for a loop or choice statement block",
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

        function checkWhile(node) {
            if (node.body.type === 'EmptyStatement') {
                context.report(node, "A semicolon is being used as the while loop's statement. This may not be intended as the next statement is not executed. Use an empty block instead if that is the intention.");
            }
        }

        function checkFor(node) {
            if (node.body.type === 'EmptyStatement') {
                context.report(node, "A semicolon is being used as the for loop's statement. This may not be intended as the next statement is not executed. Use an empty block instead if that is the intention.");
            }
        }

        function checkForIn(node) {
            if (node.body.type === 'EmptyStatement') {
                context.report(node, "A semicolon is being used as the for-in loop's statement. This may not be intended as the next statement is not executed. Use an empty block instead if that is the intention.");
            }
        }

        function checkIf(node) {
            if (node.consequent.type === 'EmptyStatement') {
                context.report(node, "A semicolon is being used as the if-then's statement. This may not be intended as the next statement is not executed. Use an empty block instead if that is the intention.");
            }

            if (node.alternate && node.alternate.type === 'EmptyStatement') {
                context.report(node, "A semicolon is being used as the else-then's statement. This may not be intended as the next statement is not executed. Use an empty block instead if that is the intention.");
            }
        }

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            "WhileStatement": checkWhile,
            "ForStatement": checkFor,
            "ForInStatement": checkForIn,
            "IfStatement": checkIf
        };
    }
};
