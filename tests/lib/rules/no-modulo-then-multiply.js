/**
 * @fileoverview Alerts x % y * z is (x % y) * z and requires parenthesis to verify.
 * @author Matt Hall
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-modulo-then-multiply"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-modulo-then-multiply", rule, {

    valid: [
        "(x % y) * z",
        "x * z % y"
    ],

    invalid: [
        {
            code: "x % y * z",
            errors: [{
                message: "x % y * z will run as (x % y) * z which may or may not be intended. Add parenthesis to validate this was the intended action.",
                type: "BinaryExpression"
            }]
        }
    ]
});
