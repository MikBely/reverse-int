module.exports = function reverse(n) {
    let revNum;
    let revStr;
    revNum = n.toString(10).split("");
    if (revNum[0] == "-") {
        revNum.splice(0, 1);
    }
    revStr = revNum.reverse().join("");
    return parseInt(revStr);
};
