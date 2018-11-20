const isSimpleNumber = num => {

    let result = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            result = false;
            break;
        }
    }

    return result;
}

const getFirstPrimeNumbers = num => {

    const result = [];

    for (let i = 2; result.length < num; i++) {
        if ( isSimpleNumber(i) ) {
            result.push(i);
        }
    }

    return result;
};

module.exports = getFirstPrimeNumbers;