const assert = require('assert');
const getPrimeNumbers = require('./index');

describe('get prime numbers 1<= n <= 1000000', () => {
    it('should return first n prime numbers', () => {
        assert.deepEqual(getPrimeNumbers(10), [2, 3, 5, 7]);
    });

    it('should return first n prime numbers', () => {
        assert.deepEqual(getPrimeNumbers(25), [2, 3, 5, 7, 11, 13, 17, 19, 23]);
    });

    it('should return first n prime numbers', () => {
        assert.deepEqual(getPrimeNumbers(100), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
    });

    it('should return first n prime numbers', () => {
        assert.deepEqual(getPrimeNumbers(2), [2]);
    });

    it('should return first n prime numbers', () => {
        assert.deepEqual(getPrimeNumbers(1), []);
    });
});