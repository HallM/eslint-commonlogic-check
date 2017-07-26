/**
 * @fileoverview Prevents the same return from a comparison expression (?: operator)
 * @author Matt Hall
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-similar-compare-expression"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-similar-compare-expression", rule, {

    valid: [
        "x ? 1 : 2",
        "x ? (1 + 1) : 2",
        "x ? (y + 3 * 4) : ((y + 3) * 4)"

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "x ? 1 : 1",
            errors: [{
                message: "The same expression was used for both potential values of a conditional expression. This may be a logic error.",
                type: "ConditionalExpression"
            }]
        },
        {
            code: "x ? (y * 3 + 4) : ((y * 3) + 4)",
            errors: [{
                message: "The same expression was used for both potential values of a conditional expression. This may be a logic error.",
                type: "ConditionalExpression"
            }]
        }
    ]
});
