module.exports = getUniqueWords = (arr) => {

    const result = [];

    arr.forEach((elem) => {
        if (!(result.includes(elem))) {
            result.push(elem);
        }
    })

    return result;
}