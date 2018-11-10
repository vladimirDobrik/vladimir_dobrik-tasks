module.exports = getMaxNumberInArray = (arr) => {

    if (Array.isArray(arr)) {

        let max = arr[0];

        arr.forEach((elem) => {
            if (elem > max) {
                max = elem;
            }
        });

        return max;
    } else {
        throw new Error(arr + " не является массивом");
    }
}