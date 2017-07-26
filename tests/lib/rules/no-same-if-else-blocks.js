/**
 * @fileoverview Catches an if-then block matches an else or else-if-then block
 * @author Matt Hall
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-same-if-else-blocks"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-same-if-else-blocks", rule, {

    valid: [
        "if (x) { y = 1; } else { y = 2; }",
        "if (x) { y = 1; } else if (y) { y = 2; } else if (y) { y = 3; } else { y = 4; }",

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "if (x) { y = 1; } else { y = 1; }",
            errors: [{
                message: "The same then-statement was used for an if and an else-then or else-if-then statement. There may be a logic error or can be simplified.",
                type: "IfStatement"
            }]
        },

        {
            code: "if (x) { y = 1; } else if (y) { y = 2; } else if (z) { y = 1; } else { y = 3; }",
            errors: [{
                message: "The same then-statement was used for an if and an else-then or else-if-then statement. There may be a logic error or can be simplified.",
                type: "IfStatement"
            }]
        },

        {
            code: "if (x) { y = 1; } else if (y) { y = 2; } else if (z) { y = 3; } else { y = 1; }",
            errors: [{
                message: "The same then-statement was used for an if and an else-then or else-if-then statement. There may be a logic error or can be simplified.",
                type: "IfStatement"
            }]
        }
    ]
});
