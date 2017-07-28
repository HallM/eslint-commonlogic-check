/**
 * @fileoverview Do not allow setting a variable to the increment or decrement of itself
 * @author Matt Hall
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-overwritten-increment"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-overwritten-increment", rule, {

    valid: [
        "x = y",
        "x = y++",
        "x = ++x"
    ],

    invalid: [
        {
            code: "x = x++;",
            errors: [{
                message: "Should not combine an assignment with the increment of the left hand side. The original value would immediately overwrite the incremented value.",
                type: "UpdateExpression"
            }]
        },

        {
            code: "x[0] = (x[0]--) + 1;",
            errors: [{
                message: "Should not combine an assignment with the decrement of the left hand side. The original value would immediately overwrite the decremented value.",
                type: "UpdateExpression"
            }]
        }
    ]
});
