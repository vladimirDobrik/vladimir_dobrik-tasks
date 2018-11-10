const assert = require('assert');
const getLastTenDigits = require('./index');

describe('get last 10 digits', () => {
    it('should return last 10 digits', () => {
        assert.equal(getLastTenDigits(10), 405071317);
    });
})