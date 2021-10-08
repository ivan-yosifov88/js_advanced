const {expect} = require('chai');
const {lookupChar} = require('../exercise/03.Char-Lookup');

describe('Test parameters of the function', function(){
    it ('when no parameters expect to return undefined',function(){
        expect(lookupChar()).to.be.undefined
    });
    it ('when only one parameter expect to return undefined',function(){
        expect(lookupChar('string')).to.be.undefined
    });
    it ('when only one parameter expect to return undefined',function(){
        expect(lookupChar(4)).to.be.undefined
    });
    it ('when number and string parameters expect to return undefined',function(){
        expect(lookupChar(4, 'string')).to.be.undefined
    });
    it ('when array and string parameters expect to return undefined',function(){
        expect(lookupChar([4], 'string')).to.be.undefined
    });
    it ('when string and object parameters expect to return undefined',function(){
        expect(lookupChar('string', {})).to.be.undefined
    });
    it ('when string and floating point number parameters expect to return undefined',function(){
        expect(lookupChar('string', 5.5)).to.be.undefined
    });
    it ('when number and number parameters expect to return undefined',function(){
        expect(lookupChar(4, 4)).to.be.undefined
    });
})
describe('Test functionality when parameters are the right type', function(){
    it ('when index is negative',function(){
        expect(lookupChar('string', -1)).to.be.equal("Incorrect index")
    });
    it ('when index is equal than the length of string',function(){
        expect(lookupChar('string', 6)).to.be.equal("Incorrect index")
    });
    it ('when index is greater than the length of string',function(){
        expect(lookupChar('string', 7)).to.be.equal("Incorrect index")
    });
    it ('when index is in range of length of string return correct index of string',function(){
        expect(lookupChar('string', 0)).to.be.equal('s')
    });
    it ('when index is in range of length of string return correct index of string',function(){
        expect(lookupChar('string', 5)).to.be.equal('g')
    });
    it ('when index is in range of length of string return correct index of string',function(){
        expect(lookupChar('string', 1)).to.be.equal('t')
    });
})

