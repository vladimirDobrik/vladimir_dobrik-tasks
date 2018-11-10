module.exports = getFirstPrimeNumbers = (num) => {
    const result = [];

    goNext:
        for (let i = 2; i <= i + 1; i++) {
            for (let k = 2; k < i; k++) {

                if (i % 2 === 0) {
                    continue goNext;
                }
                if (i % k === 0) {
                    continue goNext;
                }
            }

            if (result.length < num) {
                result.push(i);
            } else {
                return result;
            }
        }
}