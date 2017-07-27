/**
 * @fileoverview Cannot using boolean literals in math expressions
 * @author Matt Hall
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-bool-math"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var mathOperators = [
    '+',
    '-',
    '*',
    '/',
    '%',
    '<<',
    '>>',
    '>>>',
];

var logicalOperators = [
    '&',
    '^',
    '|'
];

var leftBoolMathInvalids = mathOperators.map(function(operator) {
    return {
        code: "true " + operator + " x",
        errors: [{
            message: "Cannot use boolean in math or bitwise expressions. Use 0 or 1 in the place of the boolean.",
            type: "BinaryExpression"
        }]
    };
});
var rightBoolMathInvalids = mathOperators.map(function(operator) {
    return {
        code: "x " + operator + " false",
        errors: [{
            message: "Cannot use boolean in math or bitwise expressions. Use 0 or 1 in the place of the boolean.",
            type: "BinaryExpression"
        }]
    };
});

var leftBoolLogicInvalids = logicalOperators.map(function(operator) {
    return {
        code: "(x > 5) " + operator + " x",
        errors: [{
            message: "Using boolean with '" + operator + "' may be an error. This may have been intended to be '" + operator + operator + "' If using the bitwise version was intended, change the boolean out for a 0 or 1.",
            type: "BinaryExpression"
        }]
    };
});
var rightBoolLogicInvalids = logicalOperators.map(function(operator) {
    return {
        code: "x " + operator + " !true",
        errors: [{
            message: "Using boolean with '" + operator + "' may be an error. This may have been intended to be '" + operator + operator + "' If using the bitwise version was intended, change the boolean out for a 0 or 1.",
            type: "BinaryExpression"
        }]
    };
});

var allInvalids = leftBoolMathInvalids
    .concat(rightBoolMathInvalids)
    .concat(leftBoolLogicInvalids)
    .concat(rightBoolLogicInvalids);

var ruleTester = new RuleTester();
ruleTester.run("no-bool-math", rule, {

    valid: [
        "1 + 1",
        "1 & 1",
        "true && !true",
        "(5 - 1) ^ (-1 + 2)"
    ],

    invalid: allInvalids
});
