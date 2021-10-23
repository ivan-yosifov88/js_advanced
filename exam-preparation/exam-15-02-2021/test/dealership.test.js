const { expect } = require('chai');
const { dealership } = require('../dealership')


describe("Tests dealership", function () {
    describe("Test newCarCost functionality", function () {
        it("Should return reduced price when oldModel is in discount list", function () {
            expect(dealership.newCarCost('Audi A4 B8', 100000)).to.equal(85000);
            expect(dealership.newCarCost('Audi A6 4K', 100000)).to.equal(80000);
            expect(dealership.newCarCost('Audi A8 D5', 100000)).to.equal(75000);
            expect(dealership.newCarCost('Audi TT 8J', 100000)).to.equal(86000);
            expect(dealership.newCarCost('Audi TT 8J', 100000.1)).to.equal(100000.1 - 14000);
        });
        it("Should return the same price when oldModel is not in discount list", function () {
            expect(dealership.newCarCost('Trabant', 100000)).to.equal(100000);
            expect(dealership.newCarCost('Lada', 100000)).to.equal(100000);
            expect(dealership.newCarCost('Yugo', 100000)).to.equal(100000);
        });
    });
    describe("Test carEquipment functionality", function () {
        it("Should return new array with extras when use index of second array to select indices of the first array", function () {
            expect(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [0, 1, 2, 3])).to.eql(['heated seats', 'sliding roof', 'sport rims', 'navigation']);
            expect(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [0, 1, 2])).to.eql(['heated seats', 'sliding roof', 'sport rims']);
            expect(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [0, 1, 3])).to.eql(['heated seats', 'sliding roof', 'navigation']);
            expect(dealership.carEquipment([], [])).to.eql([]);
        });
    });
    describe("Test euroCategory functionality", function () {
        it("Should return message for low euro category when category is less than 4", function () {
            expect(dealership.euroCategory(3)).to.equal('Your euro category is low, so there is no discount from the final price!');
            expect(dealership.euroCategory(2)).to.equal('Your euro category is low, so there is no discount from the final price!');
            expect(dealership.euroCategory(0)).to.equal('Your euro category is low, so there is no discount from the final price!');
        });
        it("Should return message for discount and reduced price when category is equal or greater than 4", function () {
            expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: 14250.`);
            expect(dealership.euroCategory(5)).to.equal(`We have added 5% discount to the final price: 14250.`);
            expect(dealership.euroCategory(6)).to.equal(`We have added 5% discount to the final price: 14250.`);
        });
    });


});