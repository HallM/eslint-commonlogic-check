/**
 * @fileoverview A modulo by 1 is always 0
 * @author Matt Hall
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-modulo-one"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-modulo-one", rule, {

    valid: [
        "x % 2",
        "1 % 2"
    ],

    invalid: [
        {
            code: "x % 1",
            errors: [{
                message: "x % 1 is always 0. This may be an error or can be reduced to 0.",
                type: "BinaryExpression"
            }]
        }
    ]
});
