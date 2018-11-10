module.exports = getAverageForNumbers = (arr) => {

    if (Array.isArray(arr)) {

        let result = 0;
        let arrLength = arr.length;
        let sum = arr.reduce((acc, cur) => acc + cur, 0);

        result = sum / arrLength;

        return result;
    } else {
        throw new Error(arr + " не является массивом");
    }
}