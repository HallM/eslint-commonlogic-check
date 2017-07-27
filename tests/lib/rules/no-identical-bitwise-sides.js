/**
 * @fileoverview Prevents most bitwise operations with left and right being identical.
 * @author Matt Hall
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-identical-bitwise-sides"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-identical-bitwise-sides", rule, {

    valid: [
        "x | y",
        "x & y",
        "x ^ y",
        "(x + 3 * 4) | ((x + 3) * 4)"
    ],

    invalid: [
        {
            code: "x | x",
            errors: [{
                message: "Left and right hand sides of \"|\" are identical. x | x is the same as x. This may be an error or can be reduced to just x.",
                type: "BinaryExpression"
            }]
        },

        {
            code: "(x * 3 + 4) | ((x * 3) + 4)",
            errors: [{
                message: "Left and right hand sides of \"|\" are identical. x | x is the same as x. This may be an error or can be reduced to just x.",
                type: "BinaryExpression"
            }]
        },

        {
            code: "x & x",
            errors: [{
                message: "Left and right hand sides of \"&\" are identical. x & x is the same as x. This may be an error or can be reduced to just x.",
                type: "BinaryExpression"
            }]
        },

        {
            code: "x ^ x",
            errors: [{
                message: "Left and right hand sides of \"^\" are identical. x ^ x is always 0. This may be an error or can be reduced to just 0.",
                type: "BinaryExpression"
            }]
        }
    ]
});
