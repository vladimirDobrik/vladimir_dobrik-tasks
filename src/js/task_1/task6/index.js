const getMaxNumberInArray = arr => {

    let max = arr[0];

    arr.forEach(elem => {
        if (elem > max) {
            max = elem;
        }
    });

    return max;
}

module.exports = getMaxNumberInArray;