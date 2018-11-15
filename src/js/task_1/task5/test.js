const assert = require('assert');
const getAverageForNumbers = require('./index');

describe('get average for numbers', () => {
    it('should return arithmetic average for numbers', () => {
        assert.equal(getAverageForNumbers([1]), 1);
    });

    it('should return arithmetic average for numbers', () => {
        assert.equal(getAverageForNumbers([2,2]), 2);
    });

    it('should return arithmetic average for numbers', () => {
        assert.equal(getAverageForNumbers([1,2,3,4,5]), 3);
    });

    it('should return arithmetic average for numbers', () => {
        assert.equal(getAverageForNumbers([1,2,3,4,5,9]), 4);
    });
});