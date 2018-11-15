const getUniqueWords = arr => {

    const result = [];

    arr.forEach(elem => {
        let isIncludes = result.includes(elem);

        if (!isIncludes) {
            result.push(elem);
        }
    });

    return result;
}

module.exports = getUniqueWords;