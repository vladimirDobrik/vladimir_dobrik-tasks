const mathPow = num => {

    let result = num;

    for (let i = 1; i < num; i++) {
        result *= num;
        result = result % 1e10;
    }

    return result;
}

const getLastTenDigits = num => {

    let sum = 0;
    let result;

    for (let i = 1; i <= num; i++) {
        sum += mathPow(i);
    }

    let str = String(sum);

    str.substring(str.length - 10);
    result = Number(str);

    return result;
}

module.exports = getLastTenDigits;