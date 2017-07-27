/**
 * @fileoverview Left and Right sides of a Logical Expression should not be identical
 * @author Matt Hall
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-identical-logical-sides"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-identical-logical-sides", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "1 == 1 && 1 == 1",
            errors: [{
                message: "Left and right hand sides of \"&&\" are identical which may be a logic error.",
                type: "LogicalExpression"
            }]
        }
    ]
});
