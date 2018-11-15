module.exports = getSum = num => {

    const result = String(num)
        .split('')
        .map(elem => elem = Number(elem))
        .reduce((acc, cur) => acc + cur);

    return result;
}