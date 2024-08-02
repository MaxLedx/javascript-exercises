const removeFromArray = function (array, ...args) {
    return array.filter(v => !args.includes(v));
};

// Do not edit below this line
module.exports = removeFromArray;
