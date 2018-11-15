const assert = require('assert');
const isPalindrome = require('./index');

describe('determines whether a word is a palindrome', () => {
    it('if the word is palindrome then should return true otherwise return false', () => {
        assert.equal(isPalindrome('доход'), true);
    });

    it('if the word is palindrome then should return true otherwise return false', () => {
        assert.equal(isPalindrome('доходы'), false);
    });
});