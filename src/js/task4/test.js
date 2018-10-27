const assert = require('assert');
const getUniqueWords = require('./index');

describe('get all unique words from array', () => {
    it('should return all unique words from array', () => {
        assert.deepEqual(getUniqueWords([1, 'word', 1, 'word', 'word', 'word1']), [1, 'word', 'word1']);
    });

    it('should return all unique words from array', () => {
        assert.deepEqual(getUniqueWords([1, 1, 1, 1, 1, 1]), [1]);
    });

    it('should return all unique words from array', () => {
        assert.deepEqual(getUniqueWords(['Sasha', 'Masha', 'Pasha']), ['Sasha', 'Masha', 'Pasha']);
    });

    it('should return all unique words from array', () => {
        assert.deepEqual(getUniqueWords(['Sasha', 'Masha', 'Pasha', 'Sasha', 'Masha', 'Pasha']), ['Sasha', 'Masha', 'Pasha']);
    });
});