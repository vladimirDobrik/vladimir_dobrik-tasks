module.exports = isPalindrome = (str) => {

    let result = false;

    result = String(str) === String(str)
                                        .split('')
                                        .reduceRight((acc, cur) => acc + cur, '')
                                        ?
                                        true : false;

    return result;
}