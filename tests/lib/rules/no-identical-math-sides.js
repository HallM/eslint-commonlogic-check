/**
 * @fileoverview Left and Right sides of most math operators should not be identical
 * @author Matt Hall
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-identical-math-sides"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-identical-math-sides", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "5 - 5",
            errors: [{
                message: "Left and right hand sides of \"-\" are identical. x - x is always 0. This may be an error or can be reduced to just 0.",
                type: "BinaryExpression"
            }]
        }
    ]
});
