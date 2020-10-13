module.exports = function check(str, bracketsConfig) {
    const brackets = [];
    for (let i = 0; i < bracketsConfig.length; i++) {
        brackets.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
    }
    let preStr = str;
    let curStr = str;
    while (true) {
        for (let i = 0; i < brackets.length; i++) {
            curStr = curStr.replace(brackets[i], '');
        } if (curStr.length == 0) {
            return true;
        } if (preStr === curStr) {
            return false;
        } preStr = curStr;
    }
}
