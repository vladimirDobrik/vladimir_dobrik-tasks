const isPalindrome = str => {

    let result = false;
    let reversedStr = str
        .split('')
        .reverse()
        .join('');

    result = str === reversedStr;

    return result;
}

module.exports = isPalindrome;