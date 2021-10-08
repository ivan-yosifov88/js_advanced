const {assert} = require('chai')
const {sum} = require('../lab/sum-of-numbers');

const testArray = [1, 2, 3];

describe('Test sum of array', function(){
    it('test with correct array', function(){
        assert.equal(sum([1, 2, 3]), 6)
    });
    it('test with negative numbers', function(){
        assert.equal(sum([-1, -2, -3]), -6)
    });
    it('test with positive and negative numbers', function(){
        assert.equal(sum([-1, -5, 3]), -3)
    });
});