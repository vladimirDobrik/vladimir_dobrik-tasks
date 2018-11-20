const isPalindrome = str => {

    let reversedStr = str
        .split('')
        .reverse()
        .join('');

    return str === reversedStr;
}

module.exports = isPalindrome;