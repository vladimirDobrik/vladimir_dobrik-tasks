const assert = require('assert');
const getSumFib = require('./index');

describe('get sum of first "n" even numbers', () => {
    it('should return sum of first even numbers', () => {
        assert.equal(getSumFib(5), 12);
    });

    it('should return sum of first even numbers', () => {
        assert.equal(getSumFib(8), 54);
    });
});