module.exports = function reverse(n) {
    const num = Math.abs(n);
    const str = num.toString();
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }

    return result;
}