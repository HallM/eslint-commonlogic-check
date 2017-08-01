/**
 * @fileoverview Prevents misunderstandings of operator precedence with x &lt;&lt; y + z
 * @author Matt Hall
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-ungrouped-bshift-add"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-ungrouped-bshift-add", rule, {

    valid: [
        "(x << y) + z",
        "x << (y + z)",
        "x + y << z",
        "x + (y << z)",
        "(x + y) << z"
    ],

    invalid: [
        {
            code: "x << y + z",
            errors: [{
                message: "x << y + z will be parsed as x << (y + z). This might be correct, but may have intended (x << y) + z. Use parenthesis to clarify.",
                type: "BinaryExpression"
            }]
        },

        {
            code: "x >> y - z",
            errors: [{
                message: "x >> y - z will be parsed as x >> (y - z). This might be correct, but may have intended (x >> y) - z. Use parenthesis to clarify.",
                type: "BinaryExpression"
            }]
        }
    ]
});
