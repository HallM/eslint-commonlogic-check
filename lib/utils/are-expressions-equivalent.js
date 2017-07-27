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
    if (one == null && two == null) {
        return true;
    }

    // if either is null and based on the above, both are not null,
    // then they cannot be equal
    if (one == null || two == null) {
        return false;
    }

    return _.isEqualWith(one, two, checker);
}
