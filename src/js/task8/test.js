const assert = require('assert');
const getLastTenDigits = require('./index');

describe('get last 10 digits', () => {
    it('should return last 10 digits', () => {
        assert.equal(getLastTenDigits(10), 405071317);
    });

    it('should return last 10 digits', () => {
        assert.equal(getLastTenDigits(15), 4130199900);
    });

    it('should return last 10 digits', () => {
        assert.equal(getLastTenDigits(5), 3413);
    });
});