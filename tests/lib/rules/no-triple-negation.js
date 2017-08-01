/**
 * @fileoverview Prevents more than 2 negations as they are more prone to errors
 * @author Matt Hall
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-triple-negation"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-triple-negation", rule, {

    valid: [
        "!x",
        "x",
        "!!x"
    ],

    invalid: [
        {
            code: "!!!x",
            errors: [{
                message: "Using more than 2 negations can be prone to typos and not necessary. Just use one negation in this case.",
                type: "UnaryExpression"
            }]
        },

        {
            code: "!!!!x",
            errors: [{
                message: "Using more than 2 negations can be prone to typos and not necessary. Just use two negations in this case.",
                type: "UnaryExpression"
            }]
        }
    ]
});
