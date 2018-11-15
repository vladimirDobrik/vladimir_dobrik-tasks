const getAverageForNumbers = arr => {

    let result = 0;

    if (Array.isArray(arr)) {

        let arrLength = arr.length;
        let sum = arr.reduce((acc, cur) => acc + cur, 0);

        result = sum / arrLength;

    } else {
        throw new Error(arr + " не является массивом");
    }

    return result;
}

module.exports = getAverageForNumbers;