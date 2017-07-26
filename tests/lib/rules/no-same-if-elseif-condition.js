/**
 * @fileoverview If and Else if conditions should not be the exact same
 * @author Matt Hall
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-same-if-elseif-condition"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-same-if-elseif-condition", rule, {

    valid: [
        "if (x) { y = 1; } else if (y) { z = 1; }",
        "if (x + 1 > 1) { y = 1; } else if (x + 1 > 2) { z = 1; }",
        "if ((x + 3 * 4) > 1) { y = 1; } else if (((x + 3) * 4) > 1) { z = 1; }",

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "if (x) { y = 1; } else if (x) { z = 1; }",
            errors: [{
                message: "The same test expression was used for an if and else-if (or two else-ifs). There may be a logic error.",
                type: "IfStatement"
            }]
        },

        {
            code: "if (x) {y = 0; } else if (x * 3 + 4 > 1) { y = 1; } else if ((x * 3) + 4 > 1) { z = 1; }",
            errors: [{
                message: "The same test expression was used for an if and else-if (or two else-ifs). There may be a logic error.",
                type: "IfStatement"
            }]
        }
    ]
});
