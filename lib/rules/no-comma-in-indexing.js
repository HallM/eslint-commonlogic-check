/**
 * @fileoverview Disallow commas in indexing. Could be a result of mistaking multi-dimension arrays from other languages"
 * @author Matt Hall
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Disallow commas in indexing. Could be a result of mistaking multi-dimension arrays from other languages\"",
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

        function checkMemberExpression(node) {
            // we dont care about x.y, only x[y]
            if (!node.computed) {
                return;
            }

            if (node.property.type === "SequenceExpression") {
                context.report(node, "Using a comma operator in an index may be misleading. Multidimensional indecies do not use commas.");
            }
        }

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            "MemberExpression": checkMemberExpression
        };
    }
};
