/**
 * @fileoverview Prevents two cases from having the same condition
 * @author Matt Hall
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-same-switchcase-condition"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-same-switchcase-condition", rule, {

    valid: [
        "switch (x) {\ncase 1:\nconsole.log('one');\nbreak\ncase 2:\nconsole.log('two');\nbreak;\n}"
    ],

    invalid: [
        {
            code: "switch (x) {\ncase 1:\nconsole.log('one');\nbreak\ncase 1:\nconsole.log('two');\nbreak;\n}",
            errors: [{
                message: "The switch case condition is already used above. This case will never execute and may be an error.",
                type: "SwitchCase"
            }]
        }
    ]
});
