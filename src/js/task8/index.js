module.exports = getLastTenDigits = (num) => {

    let mathPow = (num) => {

        let result = num;

        for (let i = 1; i < num; i++) {
            result *= num;
            result = result % 1e10;
        }

        return result;
    }

    let sum = 0;
    let result;

    for (let i = 1; i <= num; i++) {
        sum += mathPow(i);
    }

    result = Number(String(sum).substring(String(sum).length - 10));

    return result;
}