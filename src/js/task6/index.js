module.exports = getPrimeNumbers = (num) => {

    const result = [];

    if (num === 1) {
        return result;
    };

    goNext:
        for (let i = 2; i <= num; i++) {
            for (let k = 2; k < i; k++) {

                if (i % 2 === 0) {
                    continue goNext;
                }

                if (i % k === 0) {
                    continue goNext;
                }
            }

            result.push(i);
        }

    return result;
}