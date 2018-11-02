const assert = require('assert');
const getSumFib = require('./index');

describe('get sum of first "n" even numbers', () => {
    it('should return sum of first even numbers', () => {
        assert.equal(getSumFib(2), 10);
    });

    it('should return sum of first even numbers', () => {
        assert.equal(getSumFib(4), 188);
    });

    it('should return sum of first even numbers', () => {
        assert.equal(getSumFib(6), 3382);
    });
});