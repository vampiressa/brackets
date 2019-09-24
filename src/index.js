module.exports = function check(str, bracketsConfig) {
    let data = [];
    if (str.length % 2 !== 0) {
        return false;
    }
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (str[i] === bracketsConfig[j][1] && data[data.length - 1] === bracketsConfig[j][0]) {
                data.pop();
            } else if (str[i] === bracketsConfig[j][0]) {
                data.push(bracketsConfig[j][0]);
            }
        }
    }
    return data.length === 0;
};
