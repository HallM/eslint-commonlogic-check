var _ = require('lodash');

function checker(a, b, key) {
    // these 3 fields are always different since they are location in the source
    if (key === 'start' || key === 'end' || key === 'loc' || key === 'range') {
        return true;
    }

    // otherwise, use the default check.
    // implicit return undefined to use the default
}

module.exports = function areExpressionsEquivalent(one, two) {
    return _.isEqualWith(one, two, checker);
}
