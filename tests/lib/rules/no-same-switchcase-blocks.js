/**
 * @fileoverview Checks if two switch cases have the same code
 * @author Matt Hall
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-same-switchcase-blocks"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-same-switchcase-blocks", rule, {

    valid: [
        "switch (x) {\ncase 1: x++;\nbreak;\ncase 2: y++;\nbreak;\n}",
        "switch (x) {\ncase 1:\ncase 2: y++;\nbreak;\ncase 3:\ncase 4: z++;\nbreak;\n}",

    ],

    invalid: [
        {
            code: "switch (x) {\ncase 1: x++;\nbreak;\ncase 2: x++;\nbreak;\n}",
            errors: [{
                message: "The switch case body is a duplicate of another case. Check for any errors and ignore if this is not an issue.",
                type: "SwitchCase"
            }]
        }
    ]
});
