/**
 * @fileoverview Prevents comparing a comparison which may not operate as expected
 * @author Matt Hall
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-double-comparison"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-double-comparison", rule, {

    valid: [
        "3 > 2",
        "3 > 2 && 2 > 1"
    ],

    invalid: [
        {
            code: "a > b > c",
            errors: [{
                message: "A comparison of the result from a comparison may not work as intended. 3 > 2 > 1 is false and should instead be 3 > 2 && 2 > 1.",
                type: "BinaryExpression"
            }]
        },

        {
            code: "a == b != c",
            errors: [{
                message: "A comparison of the result from a comparison may not work as intended. 3 > 2 > 1 is false and should instead be 3 > 2 && 2 > 1.",
                type: "BinaryExpression"
            }]
        }
    ]
});
