/**
 * @fileoverview Prevents more than 2 negations as they are more prone to errors
 * @author Matt Hall
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Prevents more than 2 negations as they are more prone to errors",
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

        function checkUnaryExpression(node) {
            var n = node;
            var negations = 0;

            // check the parent, because !!!!x would be called twice
            var ancestors = context.getAncestors();
            var parent = ancestors[ancestors.length - 1];

            if (parent.type === "UnaryExpression" && parent.operator === "!") {
                return;
            }

            while (n.type === "UnaryExpression" && n.operator === "!") {
                negations++;
                n = n.argument;
            }

            if (negations <= 2) {
                return;
            }

            if ((negations % 2) === 0) {
                context.report(
                    node,
                    "Using more than 2 negations can be prone to typos and not necessary. Just use two negations in this case."
                );
            } else {
                context.report(
                    node,
                    "Using more than 2 negations can be prone to typos and not necessary. Just use one negation in this case."
                );
            }
        }

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            "UnaryExpression": checkUnaryExpression
        };
    }
};
