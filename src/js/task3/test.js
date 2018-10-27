const assert = require('assert');
const getSum = require('./index');

describe('get sum of number', () => {
    it('should return sum of number', () => {
        assert.equal(getSum('564674474'), 47);
    });

    it('should return sum of number', () => {
        assert.equal(getSum(123), 6);
    });

    it('should return sum of number', () => {
        assert.equal(getSum('0101'), 2);
    });
});