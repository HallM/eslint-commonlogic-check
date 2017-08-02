var requireIndex = require("requireindex");
var astEqualityChecks = requireIndex(__dirname + "/ast-equality");

function filterDontCheckKeys(key) {
  var keysToIgnore = [
    'start',
    'end',
    'loc',
    'range',
    'parent'
  ];

  return keysToIgnore.indexOf(key) === -1;
}

function defaultAstEquality(nodeOne, nodeTwo) {
  // at this point, we would have caught non objects and arrays
  // so the only thing left is another AST node

  var keysOfOne = Object.keys(nodeOne).filter(filterDontCheckKeys);
  var keysOfTwo = Object.keys(nodeTwo).filter(filterDontCheckKeys);

  var numOfKeys = keysOfOne.length;

  if (numOfKeys !== keysOfTwo.length) {
    return false;
  }

  var i;
  var key;

  for (i=0; i < numOfKeys; i++) {
    key = keysOfOne[i];

    if (!checkEquality(nodeOne[key], nodeTwo[key])) {
      return false;
    }
  }

  // if all checks passed, then they match
  return true;
}

function checkArray(nodeOne, nodeTwo) {
  var length = nodeOne.length;
  var i;

  if (length !== nodeTwo.length) {
    return false;
  }

  for (i = 0; i < length; i++) {
    if (!checkEquality(nodeOne[i], nodeTwo[i])) {
      return false;
    }
  }

  return true;
}

function checkEquality(nodeOne, nodeTwo) {
  if (nodeOne === nodeTwo) {
    return true;
  }

  if ((nodeOne == null || nodeTwo == null) && nodeOne != nodeTwo) {
    return false;
  }

  var nodeType = typeof nodeOne;

  // this will catch unmatched primitives
  // and also catch if one is null/undefined
  if (nodeType !== typeof nodeTwo) {
    return false;
  }

  if (Array.isArray(nodeOne)) {
    if (!Array.isArray(nodeTwo)) {
      return false;
    }

    return checkArray(nodeOne, nodeTwo);
  }

  // the last type to check is for ast nodes
  // make sure they are AST nodes and they are the same type of node
  if (!nodeOne.type || nodeOne.type !== nodeTwo.type) {
    return false;
  }

  // attempt to look up an equality check for that type, if not use default
  var checker = astEqualityChecks[nodeOne.type] || defaultAstEquality;

  return checker(nodeOne, nodeTwo);
}

module.exports.checkEquality = checkEquality;
