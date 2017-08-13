/**
 * @fileoverview Prevents two identical if statements next to each other
 * @author Matt Hall
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-same-neighboring-ifs"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-same-neighboring-ifs", rule, {

    valid: [
        "if (x) {}\nif(y) {}"
    ],

    invalid: [
        {
            code: "if (x) {}\nif(x) {}",
            errors: [{
                message: "The same test expression was used for two neighboring If statements. This commonly is a logic error or can be optimized by merging the If statements.",
                type: "IfStatement"
            }]
        }
    ]
});
