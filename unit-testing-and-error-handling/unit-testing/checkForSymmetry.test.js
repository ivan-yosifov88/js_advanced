const {expect} = require('chai');
const {isSymmetric} = require('../lab/check-for-symmetry');

describe('Test function argument', function(){
    let currentValue
    let expected
    it('test with sting as argument', function(){
        expect(isSymmetric('string')).to.be.false
    });
    it ('test with object as argument', function(){
        expect(isSymmetric({})).to.be.false
    });
    it ('test with number as argument', function(){
        expect(isSymmetric(4)).to.be.false
    });
    it ('test with no argument', function(){
        expect(isSymmetric()).to.be.false
    });
    it ('test with no different type of elements in array', function(){
        expect(isSymmetric([1, 2, '2', 1])).to.be.false
    });

})
describe('Test check functionality', function(){
    it('test correct result with odd elements', function(){
        currentValue = [1, 2, 1]
        expect(isSymmetric(currentValue)).to.be.true
    });
    it('test correct result with even elements', function(){
        currentValue = ['a', 'b', 'b', 'a']
        expect(isSymmetric(currentValue)).to.be.true
    });
    it('test incorrect result with odd elements', function(){
        currentValue = ['a', 'b', 'b']
        expect(isSymmetric(currentValue)).to.be.false
    });
    it('test incorrect result with even elements', function(){
        currentValue = [1, 2, 1, 1]
        expect(isSymmetric(currentValue)).to.be.false
    });
})
