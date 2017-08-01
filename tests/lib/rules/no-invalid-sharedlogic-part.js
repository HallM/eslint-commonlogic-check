/**
 * @fileoverview Prevents a situation of A || (A &amp;&amp; B) as the 2nd half is always false
 * @author Matt Hall
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-invalid-sharedlogic-part"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-invalid-sharedlogic-part", rule, {

    valid: [
        "a && (b || c)",
        "a || b || c",
        "a && b && c",
        "a || (b && c)"
    ],

    invalid: [
        {
            code: "a || (a && b)",
            errors: [{
                message: "Detected the pattern A || (A && B) which may be an error. This is the same as just A. B will never run.",
                type: "LogicalExpression"
            }]
        },

        {
            code: "a || a && b",
            errors: [{
                message: "Detected the pattern A || (A && B) which may be an error. This is the same as just A. B will never run.",
                type: "LogicalExpression"
            }]
        },

        {
            code: "a && b || a",
            errors: [{
                message: "Detected the pattern (A && B) || A which may be an error. This is the same as just (A && B).",
                type: "LogicalExpression"
            }]
        },

        {
            code: "(b && a) || a",
            errors: [{
                message: "Detected the pattern (B && A) || A which may be an error. This is the same as just (B && A).",
                type: "LogicalExpression"
            }]
        },

        {
            code: "a || (b && a)",
            errors: [{
                message: "Detected the pattern A || (B && A) which may be an error. The result is just A, but B's side effects may run still.",
                type: "LogicalExpression"
            }]
        },


        {
            code: "(1 + 4 - 3) || ((1 + 4 - 3) && x)",
            errors: [{
                message: "Detected the pattern A || (A && B) which may be an error. This is the same as just A. B will never run.",
                type: "LogicalExpression"
            }]
        }
    ]
});
