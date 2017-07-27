/**
 * @fileoverview Using x % 2 == 1 for an even/odd check will not work if x is negative.
 * @author Matt Hall
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-bad-odd-checks"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-bad-odd-checks", rule, {

    valid: [
        "x % 2 == 0",
        "x % 2 == !1",
        "x % 2 === ~1",
        "x % 2 != 0",
        "x % 3 == 1",
        "2 % x == 0"
    ],

    invalid: [
        {
            code: "x % 2 === 1",
            errors: [{
                message: "Using x % 2 == 1 for an odd check does not properly work when x is negative as the result would be -1 instead of 1. Consider uing x % 2 != 0 or x & 1 == 1 for a more complete odd check.",
                type: "BinaryExpression"
            }]
        },

        {
            code: "-1 == 7 % 2",
            errors: [{
                message: "Using x % 2 == 1 for an odd check does not properly work when x is negative as the result would be -1 instead of 1. Consider uing x % 2 != 0 or x & 1 == 1 for a more complete odd check.",
                type: "BinaryExpression"
            }]
        },

        {
            code: "7 % 2 == ~0",
            errors: [{
                message: "Using x % 2 == 1 for an odd check does not properly work when x is negative as the result would be -1 instead of 1. Consider uing x % 2 != 0 or x & 1 == 1 for a more complete odd check.",
                type: "BinaryExpression"
            }]
        },

        {
            code: "7 % 2 == !0",
            errors: [{
                message: "Using x % 2 == 1 for an odd check does not properly work when x is negative as the result would be -1 instead of 1. Consider uing x % 2 != 0 or x & 1 == 1 for a more complete odd check.",
                type: "BinaryExpression"
            }]
        },

        {
            code: "7 % 2 == !false",
            errors: [{
                message: "Using x % 2 == 1 for an odd check does not properly work when x is negative as the result would be -1 instead of 1. Consider uing x % 2 != 0 or x & 1 == 1 for a more complete odd check.",
                type: "BinaryExpression"
            }]
        },

        {
            code: "7 % 2 == true",
            errors: [{
                message: "Using x % 2 == 1 for an odd check does not properly work when x is negative as the result would be -1 instead of 1. Consider uing x % 2 != 0 or x & 1 == 1 for a more complete odd check.",
                type: "BinaryExpression"
            }]
        },
    ]
});
