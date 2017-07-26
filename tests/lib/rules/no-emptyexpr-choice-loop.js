/**
 * @fileoverview Cannot have a semicolon, or an empty expression, for a loop or choice statement block
 * @author Matt Hall
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-emptyexpr-choice-loop"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-emptyexpr-choice-loop", rule, {

    valid: [
        "if (x) {}",
        "if (x) {} else {}",
        "while (x) {}",
        "for (;;) {}",
        "for (var x in obj) {}"
    ],

    invalid: [
        {
            code: "if (x); { y = 1; }",
            errors: [{
                message: "A semicolon is being used as the if-then's statement. This may not be intended as the next statement is not executed. Use an empty block instead if that is the intention.",
                type: "IfStatement"
            }]
        },

        {
            code: "if (x) { y = 1; } else; { y = 2; }",
            errors: [{
                message: "A semicolon is being used as the else-then's statement. This may not be intended as the next statement is not executed. Use an empty block instead if that is the intention.",
                type: "IfStatement"
            }]
        },

        {
            code: "while (x); { y = 1; }",
            errors: [{
                message: "A semicolon is being used as the while loop's statement. This may not be intended as the next statement is not executed. Use an empty block instead if that is the intention.",
                type: "WhileStatement"
            }]
        },

        {
            code: "for (x; x; --x); { y = 1; }",
            errors: [{
                message: "A semicolon is being used as the for loop's statement. This may not be intended as the next statement is not executed. Use an empty block instead if that is the intention.",
                type: "ForStatement"
            }]
        },

        {
            code: "for (var x in obj); { y = 1; }",
            errors: [{
                message: "A semicolon is being used as the for-in loop's statement. This may not be intended as the next statement is not executed. Use an empty block instead if that is the intention.",
                type: "ForInStatement"
            }]
        }
    ]
});
