const assert = require('assert');
const getFirstPrimeNumbers = require('./index');

describe('get prime numbers 1<= n <= 1000000', () => {
    it('should return first n prime numbers', () => {
        assert.deepEqual(getFirstPrimeNumbers(3), [2, 3, 5]);
    });

    it('should return first n prime numbers', () => {
        assert.deepEqual(getFirstPrimeNumbers(5), [2, 3, 5, 7, 11]);
    });

    it('should return first n prime numbers', () => {
        assert.deepEqual(getFirstPrimeNumbers(9), [2, 3, 5, 7, 11, 13, 17, 19, 23]);
    });

    it('should return first n prime numbers', () => {
        assert.deepEqual(getFirstPrimeNumbers(1), [2]);
    });
});