const assert = require('assert');
const getMaxNumberInArray = require('./index');

describe('get max number in array', () => {
    it('should return max number in array', () => {
        assert.equal(getMaxNumberInArray([1,2,3,4,5]), 5);
    });

    it('should return max number in array', () => {
        assert.equal(getMaxNumberInArray([10,2,3,4,5]), 10);
    });

    it('should return max number in array', () => {
        assert.equal(getMaxNumberInArray([1,2,3,4,5,100]), 100);
    });

    it('should return max number in array', () => {
        assert.equal(getMaxNumberInArray([1,2,101,4,5,100]), 101);
    });
});