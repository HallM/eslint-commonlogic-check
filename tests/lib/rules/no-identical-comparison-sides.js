/**
 * @fileoverview Checks for identical Left and Right hand side for binary expressions
 * @author Matt Hall
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-identical-comparison-sides"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-identical-comparison-sides", rule, {

    valid: [
        "x + 2 === x * 2",
        "x == y",
        "1 === 2",
        "(x - 3) * 2 == x - 3 * 2"

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "x + 2 === x + 2",
            errors: [{
                message: "Left and right hand sides of \"===\" are identical which may be an error.",
                type: "BinaryExpression"
            }]
        },

        {
            code: "(x * 2) + 3 > x * 2 + 3",
            errors: [{
                message: "Left and right hand sides of \">\" are identical which may be an error.",
                type: "BinaryExpression"
            }]
        }
    ]
});
