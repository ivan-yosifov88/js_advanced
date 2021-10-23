const {expect} = require('chai');
const {testNumbers} = require('../03. Test Numbers_Ресурси/testNumbers');


describe('Test testNumbers functionality', function(){
    describe('Test sumNumbers functionality', function(){
        it ('Should return undefined when parameters are not numbers', function(){
            expect(testNumbers.sumNumbers()).to.be.undefined
            expect(testNumbers.sumNumbers('1', 1)).to.be.undefined
            expect(testNumbers.sumNumbers(1, '1')).to.be.undefined
        });
        it ('Should return correct result fixed to the second digit when numbers are correct ', function(){
            expect(testNumbers.sumNumbers(1, 2)).to.be.equal('3.00')
            expect(testNumbers.sumNumbers(0, 3)).to.be.equal('3.00')
            expect(testNumbers.sumNumbers(-3, 6)).to.be.equal('3.00')
            expect(testNumbers.sumNumbers(1.5, 1.5)).to.be.equal('3.00')
            expect(testNumbers.sumNumbers(-1.5, 4.5)).to.be.equal('3.00')
            expect(testNumbers.sumNumbers(6, -3)).to.be.equal('3.00')
        });
    });
    describe('Test numberChecker functionality', function(){
        it ('Should throw Error when passed parameter is not a number', function(){
            expect(() => testNumbers.numberChecker('Test')).to.throw(Error, 'The input is not a number!')
            expect(() => testNumbers.numberChecker({"Test":1})).to.throw(Error, 'The input is not a number!')
            expect(() => testNumbers.numberChecker([1, 2])).to.throw(Error, 'The input is not a number!')
        });
        it ('Should return message when number is even', function(){
            expect(testNumbers.numberChecker('2')).to.be.equal('The number is even!')
            expect(testNumbers.numberChecker(4)).to.be.equal('The number is even!')
        });
        it ('Should return message when number is odd', function(){
            expect(testNumbers.numberChecker('3')).to.be.equal('The number is odd!')
            expect(testNumbers.numberChecker(9)).to.be.equal('The number is odd!')
        });
    });
    describe('Test averageSum functionality', function(){
        it ('Should return average sum when pass array of numbers', function(){
            expect(testNumbers.averageSumArray([1])).to.be.equal(1)
            expect(testNumbers.averageSumArray([1, 2, 3])).to.be.equal(2)
            expect(testNumbers.averageSumArray([1, -2, 4])).to.be.equal(1)
            expect(testNumbers.averageSumArray([1.5 , 2.5 , 2])).to.be.equal(2)
            expect(testNumbers.averageSumArray([1.5 , 2.5 , 1.5])).to.be.closeTo(1.83 ,0.01)
        });
    });
})