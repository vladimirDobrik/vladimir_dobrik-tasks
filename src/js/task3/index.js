module.exports = getSum = (str) => {

    let result = String(str).split('')
                            .map((elem) => elem = +elem)
                            .reduce((acc, cur) => acc + cur);

    return result;
}