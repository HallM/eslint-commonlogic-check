/**
 * @fileoverview Prevents comparing numbers and booleans and also using numerical comparisons on booleans
 * @author Matt Hall
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-bool-num-compares"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-bool-num-compares", rule, {

    valid: [
        "x > y",
        "false == false",
        "x == true",
        "'str' !== 'str'"
    ],

    invalid: [
        {
            code: "x > false",
            errors: [{
                message: "Cannot use the '>' comparison with a boolean literal.",
                type: "BinaryExpression"
            }]
        },

        {
            code: "5 <= true",
            errors: [{
                message: "Cannot use the '<=' comparison with a boolean literal.",
                type: "BinaryExpression"
            }]
        },

        {
            code: "5 === true",
            errors: [{
                message: "Cannot compare a boolean literal to a non-boolean literal.",
                type: "BinaryExpression"
            }]
        }
    ]
});
