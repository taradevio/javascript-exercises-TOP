const repeatString = function(str, num) {
        let hey = "";
        for (; num > 0; num--) {
            hey += str;
        }
        return hey;
    };
    repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;
