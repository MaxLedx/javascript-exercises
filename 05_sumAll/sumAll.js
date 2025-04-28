const sumAll = function (a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR';
    if (a < 0 || b < 0) return 'ERROR';

    if (a > b) [a, b] = [b, a];

    // https://math.stackexchange.com/questions/1917510/gauss-formula-to-add-number-of-sequence-for-arbitrary-range
    return ((a + b) * (b - a + 1)) / 2;
};

// Do not edit below this line
module.exports = sumAll;
