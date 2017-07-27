/**
 * @fileoverview Prevents expressions with one operand of 0 which are useless
 * @author Matt Hall
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-useless-zeros"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var potentialRhzErrors = {
    "+": "The right side is 0. x + 0 is just x. This may be an error or can be reduced to x.",
    "-": "The right side is 0. x - 0 is just x. This may be an error or can be reduced to x.",
    "*": "The right side is 0. x * 0 is always 0. This may be an error or can be reduced to 0.",
    "/": "The right side is 0. Cannot divide by 0.",
    "%": "The right side is 0. Cannot use modulo by 0, as this is a divide by 0.",

    "&": "The right side is 0. x & 0 is always 0. This may be an error or can be reduced to 0.",
    "|": "The right side is 0. x | 0 is just x. This may be an error or can be reduced to x.",
    "^": "The right side is 0. x ^ 0 is just x. This may be an error or can be reduced to x.",
    "<<": "The right side is 0. x << 0 is just x. This may be an error or can be reduced to x.",
    ">>": "The right side is 0. x >> 0 is just x. This may be an error or can be reduced to x.",
    ">>>": "The right side is 0. x >>> 0 is just x. This may be an error or can be reduced to x."
};

var potentialLhzErrors = {
    "+": "The left side is 0. 0 + x is just x. This may be an error or can be reduced to x.",
    "-": "The left side is 0. 0 - x is just -x. This may be an error or can be reduced to -x.",
    "*": "The left side is 0. 0 * x is always 0. This may be an error or can be reduced to 0.",
    "/": "The left side is 0. 0 / x is always 0. This may be an error or can be reduced to 0.",
    "%": "The left side is 0. 0 % x is always 0. This may be an error or can be reduced to 0.",

    "&": "The left side is 0. 0 & x is always 0. This may be an error or can be reduced to 0.",
    "|": "The left side is 0. 0 | x is just x. This may be an error or can be reduced to x.",
    "^": "The left side is 0. 0 ^ x is just x. This may be an error or can be reduced to x.",
    "<<": "The left side is 0. 0 << x is always 0. This may be an error or can be reduced to 0.",
    ">>": "The left side is 0. 0 >> x is always 0. This may be an error or can be reduced to 0.",
    ">>>": "The left side is 0. 0 >>> x is always 0. This may be an error or can be reduced to 0."
};

var potentialUnaryErrors = {
    "!": "The value is 0. !0 is always 1. This may be an error or can be reduced to 1.",
    "~": "The value is 0. ~0 is always -1. This may be an error or can be reduced to -1.",
};

var rhzInvalids = Object.keys(potentialRhzErrors).map(function(operator) {
    return {
        code: "x " + operator + " 0",
        errors: [{
            message: potentialRhzErrors[operator],
            type: "BinaryExpression"
        }]
    };
});
var lhzInvalids = Object.keys(potentialLhzErrors).map(function(operator) {
    return {
        code: "0 " + operator + " x",
        errors: [{
            message: potentialLhzErrors[operator],
            type: "BinaryExpression"
        }]
    };
});
var bothzInvalids = Object.keys(potentialLhzErrors).map(function(operator) {
    return {
        code: "0 " + operator + " 0",
        errors: [{
            message: potentialLhzErrors[operator],
            type: "BinaryExpression"
        }, {
            message: potentialRhzErrors[operator],
            type: "BinaryExpression"
        }]
    };
});
var unaryInvalids = Object.keys(potentialUnaryErrors).map(function(operator) {
    return {
        code: operator + "0",
        errors: [{
            message: potentialUnaryErrors[operator],
            type: "UnaryExpression"
        }]
    };
});

var rhzValids = Object.keys(potentialRhzErrors).map(function(operator) {
    return "x " + operator + " 1";
});
var lhzValids = Object.keys(potentialLhzErrors).map(function(operator) {
    return "1 " + operator + " x";
});
var bothValids = Object.keys(potentialLhzErrors).map(function(operator) {
    return "1 " + operator + " 1";
});
var unaryValids = Object.keys(potentialUnaryErrors).map(function(operator) {
    return operator + "1";
});

var allInvalids = rhzInvalids
    .concat(lhzInvalids)
    .concat(bothzInvalids)
    .concat(unaryInvalids);

var allValids = rhzValids
    .concat(lhzValids)
    .concat(bothValids)
    .concat(unaryValids);

var ruleTester = new RuleTester();
ruleTester.run("no-useless-zeros", rule, {
    valid: allValids,
    invalid: allInvalids
});
