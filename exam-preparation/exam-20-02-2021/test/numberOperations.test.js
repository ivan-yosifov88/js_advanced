const {expect} = require('chai');
const {numberOperations} = require('../03. Number Operations_Resources');


describe("Tests for numberOperations", function() {
    describe("Test powerNumber functionality", function() {
        it("Should return the power of two when number is passed", function() {
            expect(numberOperations.powNumber(2)).to.equal(4);
            expect(numberOperations.powNumber(-2)).to.equal(4);
            expect(numberOperations.powNumber(0)).to.equal(0);
            expect(numberOperations.powNumber(2.2)).to.closeTo(4,8, 0.1);
        });
     });
     describe("Test numberChecker functionality", function() {
        it("Should throw Error when parameter is not a number", function() {
            expect(() => numberOperations.numberChecker(undefined)).to.throw(Error, 'The input is not a number!')
            expect(() => numberOperations.numberChecker('abc')).to.throw(Error, 'The input is not a number!')
            expect(() => numberOperations.numberChecker({'a': 1})).to.throw(Error, 'The input is not a number!')
            expect(() => numberOperations.numberChecker([1, 2])).to.throw(Error, 'The input is not a number!')
        });
        it("Should return message when parameter is number and is less than 100", function() {
            expect(numberOperations.numberChecker(1)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(-1)).to.equal('The number is lower than 100!')
            expect(numberOperations.numberChecker(0)).to.equal('The number is lower than 100!')
            expect(numberOperations.numberChecker(99)).to.equal('The number is lower than 100!')
            expect(numberOperations.numberChecker(1.1)).to.equal('The number is lower than 100!')
        });
        it("Should return message when parameter is number and is equal or greater than 100", function() {
            expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(101)).to.equal('The number is greater or equal to 100!')
            expect(numberOperations.numberChecker(101.1)).to.equal('The number is greater or equal to 100!')
        });
     });
     describe("Test sumArray functionality", function() {
        it("Should return empty array when array's are empty", function() {
           expect(numberOperations.sumArrays([], [])).to.eql([])
        });
        it("Should return correct result array when array's length is equal", function() {
            expect(numberOperations.sumArrays([1, 2], [3, 4])).to.eql([4, 6])
            expect(numberOperations.sumArrays([1, 2, 3.3], [3, 4, 3.3])).to.eql([4, 6, 3.3 + 3.3])
            expect(numberOperations.sumArrays([1, 2, 3], [3, 4, -6])).to.eql([4, 6, -3])
            expect(numberOperations.sumArrays(['a', 'b'], ['c', 'd'])).to.eql(['ac', 'bd'])
         });
         it("Should return correct result array when array's length is different", function() {
            expect(numberOperations.sumArrays([1, 2, 3], [3, 4])).to.eql([4, 6 ,3])
            expect(numberOperations.sumArrays([1, 2], [3, 4, 3.3])).to.eql([4, 6, 3.3])
            expect(numberOperations.sumArrays([1, 2], [3, 4, -6])).to.eql([4, 6, -6])
            expect(numberOperations.sumArrays([], [3, 4, -6])).to.eql([3, 4, -6])
            expect(numberOperations.sumArrays(['a', 'b', 'd'], ['c', 'd'])).to.eql(['ac', 'bd', 'd'])
         });
     });

});