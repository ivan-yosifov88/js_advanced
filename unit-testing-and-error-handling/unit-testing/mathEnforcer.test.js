const {expect} = require('chai');
const {mathEnForcer, mathEnforcer} = require('../exercise/03.Math-Enforcer');

describe('Test addFive function', function(){
    it ('when parameter is string should return undefined', function(){
        expect(mathEnforcer.addFive('1')).to.be.undefined
    });
    it ('when parameter is array should return undefined', function(){
        expect(mathEnforcer.addFive([1])).to.be.undefined
    });
    it ('when parameter is object should return undefined', function(){
        expect(mathEnforcer.addFive({})).to.be.undefined
    });
    it ('when parameter is number should return number + 5', function(){
        expect(mathEnforcer.addFive(5)).to.be.equal(10)
    });
    it ('when parameter is float number should return number + 5', function(){
        expect(mathEnforcer.addFive(5.5)).to.be.closeTo(10.5, 0.01)
    });
    it ('when parameter is negative number should return number + 5', function(){
        expect(mathEnforcer.addFive(-4)).to.be.equal(1)
    });
})
describe('Test subtractTen function', function(){
    it ('when parameter is string should return undefined', function(){
        expect(mathEnforcer.subtractTen('1')).to.be.undefined
    });
    it ('when parameter is array should return undefined', function(){
        expect(mathEnforcer.subtractTen([1])).to.be.undefined
    });
    it ('when parameter is object should return undefined', function(){
        expect(mathEnforcer.subtractTen({})).to.be.undefined
    });
    it ('when parameter is number should return number - 10', function(){
        expect(mathEnforcer.subtractTen(5)).to.be.equal(-5)
    });
    it ('when parameter is floating number should return number - 10', function(){
        expect(mathEnforcer.subtractTen(15.5)).to.be.closeTo(5.5, 0.1)
    });
    it ('when parameter is negative number should return number - 10', function(){
        expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15)
    });
})
describe('Test sum function', function(){
    it ('when parameters are strings should return undefined', function(){
        expect(mathEnforcer.sum('1', '1')).to.be.undefined
    });
    it ('when parameters are arrays should return undefined', function(){
        expect(mathEnforcer.sum(['1'], ['1'])).to.be.undefined
    });
    it ('when parameters are objects should return undefined', function(){
        expect(mathEnforcer.sum({}, {})).to.be.undefined
    });
    it ('when one of parameters is correct should return undefined', function(){
        expect(mathEnforcer.sum(1, '1')).to.be.undefined
        expect(mathEnforcer.sum(1, ['1'])).to.be.undefined
        expect(mathEnforcer.sum(1, {})).to.be.undefined
        expect(mathEnforcer.sum('1', 1)).to.be.undefined
        expect(mathEnforcer.sum(['1'], 1)).to.be.undefined
        expect(mathEnforcer.sum({}, 1)).to.be.undefined
    });
    it ('when parameters are correct', function(){
        expect(mathEnforcer.sum(1, 1)).to.be.equal(2)
        expect(mathEnforcer.sum(2, -1)).to.be.equal(1)
        expect(mathEnforcer.sum(-1, 1)).to.be.equal(0)
        expect(mathEnforcer.sum(-1, -1)).to.be.equal(-2)
        expect(mathEnforcer.sum(-1.1, -1)).to.be.closeTo(-2.1, 0.01)
        expect(mathEnforcer.sum(1.1, 1)).to.be.closeTo(2.1, 0.01)
        expect(mathEnforcer.sum(1.1, 1.1)).to.be.closeTo(2.2, 0.01)
        expect(mathEnforcer.sum(-1.1, -1.1)).to.be.closeTo(-2.2, 0.01)
        expect(mathEnforcer.sum(-1.1, 1.1)).to.be.closeTo(0, 0.01)
    })
})