const {expect} = require('chai');
const {createCalculator} = require('../lab/add-subtract');

describe('Test functionality', function(){
    let instance = {};
    beforeEach(() => {
        instance = createCalculator()
    });
    
    it ('check for properties', function(){
        expect(instance).to.has.ownProperty('add')
        expect(instance).to.has.ownProperty('subtract')
        expect(instance).to.has.ownProperty('get')
    })
    it ('check add one number', function(){
        instance.add(1)
        expect(instance.get()).to.be.equal(1)
    });
    it ('check add many numbers', function(){
        instance.add(1)
        instance.add(1)
        instance.add('1')
        instance.add(-1)
        expect(instance.get()).to.be.equal(2)
    });
    it ('check subtract one number', function(){
        instance.subtract(1)
        expect(instance.get()).to.be.equal(-1)
    });
    it ('check subtract many numbers', function(){
        instance.subtract(1)
        instance.subtract(1)
        instance.subtract('1')
        instance.subtract(-1)
        expect(instance.get()).to.be.equal(-2)
    });

});
