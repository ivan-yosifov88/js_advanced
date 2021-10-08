const {expect} = require('chai');
const {isOddOrEven} = require('../exercise/02.Even-or_Odd')

describe("Test parameters of the function", function(){
    it ('when parameter is number expect to return undefined', function(){
        expect(isOddOrEven(1)).to.be.undefined
    });
    it ('when parameter is array expect to return undefined', function(){
        expect(isOddOrEven([])).to.be.undefined
    });
    it ('when parameter is object expect to return undefined', function(){
        expect(isOddOrEven({})).to.be.undefined
    });
    it ('when no parameter expect to return undefined', function(){
        expect(isOddOrEven()).to.be.undefined
    });
})
describe("Test functionality", function(){
    it ('when string is even length to be even', function(){
        expect(isOddOrEven('baba')).to.be.equal('even')
    });
    it ('when string is odd length to be odd', function(){
        expect(isOddOrEven('aba')).to.be.equal('odd')
    });
    it ('when empty string length to be even', function(){
        expect(isOddOrEven('')).to.be.equal('even')
    });
    let strForTest = "";
    let times  = 10
    for (let i = 0; i < times; i ++){
        if (i % 2 == 0){
            it ('when string is even length to be even', function(){
                expect(isOddOrEven(strForTest)).to.be.equal('even')
                strForTest += 'e'
            });
        }else {
            it ('when string is even length to be even', function(){
                expect(isOddOrEven(strForTest)).to.be.equal('odd')
                strForTest += 'o'
            });
        }
        
    }
                           
})