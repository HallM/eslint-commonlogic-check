/**
 * @fileoverview Alerts x % y * z is (x % y) * z and requires parenthesis to verify.
 * @author Matt Hall
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

var isNodeGrouped = require('../utils/is-node-grouped');

module.exports = {
    meta: {
        docs: {
            description: "Alerts x % y * z is (x % y) * z and requires parenthesis to verify.",
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

        function checkBinaryExpression(node) {
            if (node.operator !== "*") {
                return;
            }

            if (node.left.type !== "BinaryExpression" || node.left.operator !== "%") {
                return;
            }

            // now check if there for parenthesis
            if (isNodeGrouped(sourceCode, node.left)) {
                return;
            }

            context.report(
                node,
                "x % y * z will run as (x % y) * z which may or may not be intended. Add parenthesis to validate this was the intended action."
            );
        }

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            "BinaryExpression": checkBinaryExpression
        };
    }
};
