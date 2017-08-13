/**
 * @fileoverview Prevents unchecked indexOf which should be tested against -1 not 0
 * @author Matt Hall
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-unchecked-indexof"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-unchecked-indexof", rule, {

    valid: [
        "if (s.indexOf('1') === -1) {}",
        "if (s.indexOf('1') != -1) {}",
        "if (s.indexOf('1') >= 0) {}",
        "if (s.indexOf('1') != 0) {}",
    ],

    invalid: [
        {
            code: "if (s.indexOf('1')) {}",
            errors: [{
                message: "Using indexOf without comparing to a number can be a common mistake. indexOf returns -1 for no match. It should be compared to a number to make sure it is correct.",
                type: "CallExpression"
            }]
        },
        {
            code: "if (!s.indexOf('1')) {}",
            errors: [{
                message: "Using indexOf without comparing to a number can be a common mistake. indexOf returns -1 for no match. It should be compared to a number to make sure it is correct.",
                type: "CallExpression"
            }]
        }
    ]
});
