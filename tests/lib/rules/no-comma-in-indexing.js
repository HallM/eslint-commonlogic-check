/**
 * @fileoverview Disallow commas in indexing. Could be a result of mistaking multi-dimension arrays from other languages&#34;
 * @author Matt Hall
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-comma-in-indexing"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-comma-in-indexing", rule, {

    valid: [
        "arr[1]",

        // if you want to reject this, you might just want to reject commas entirely
        "arr[1 + (2, 3)]"

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "arr[1, 2]",
            errors: [{
                message: "Using a comma operator in an index may be misleading. Multidimensional indecies do not use commas.",
                type: "MemberExpression"
            }]
        }
    ]
});
