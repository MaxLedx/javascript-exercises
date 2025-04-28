const repeatString = function (string, num) {
    if (num < 0) return 'ERROR';
    let builder = '';
    for (let i = 0; i < num; i++) {
        builder += string;
    }
    return builder;
};

// Do not edit below this line
module.exports = repeatString;
