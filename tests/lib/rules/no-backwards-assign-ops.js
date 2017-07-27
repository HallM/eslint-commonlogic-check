/**
 * @fileoverview Catches typos like =+ and =- that should be += and -=
 * @author Matt Hall
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-backwards-assign-ops"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-backwards-assign-ops", rule, {

    valid: [
        "x += y",
        "x = +y",
        "x-=y",
        "x= -y"
    ],

    invalid: [
        {
            code: "x =+ y",
            errors: [{
                message: "Detected '=+' which may be a typo for '+='." +
                        "If this is not a typo, add white space between the '=' and '+' to ignore.",
                type: "AssignmentExpression"
            }]
        },

        {
            code: "x=-y",
            errors: [{
                message: "Detected '=-' which may be a typo for '-='." +
                        "If this is not a typo, add white space between the '=' and '-' to ignore.",
                type: "AssignmentExpression"
            }]
        }
    ]
});
