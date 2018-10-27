module.exports = getSum = (str) => {
    return String(str).split('').map((elem) => elem = +elem).reduce((acc,cur) => acc + cur);
}