/**
 * @fileoverview Checks for assignments where x = x, which may be a bug
 * @author Matt Hall
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-same-assignment"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-same-assignment", rule, {

    valid: [
        "y = x;",
        "x[1] = x[2];"

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "x = x;",
            errors: [{
                message: "A variable is set to itself, which may be a logic bug or a typo.",
                type: "AssignmentExpression"
            }]
        },

        {
            code: "x[1 + 1] = (x[(1 + 1)]);",
            errors: [{
                message: "A variable is set to itself, which may be a logic bug or a typo.",
                type: "AssignmentExpression"
            }]
        }
    ]
});
