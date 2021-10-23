const {expect} = require('chai');
const {pizzUni} = require('../pizza');

describe("Test pizzUni functionality",function(){
    describe("Test makeAnOrder functionality", function(){
        it('should throw Error when orderedPizza is undefined',function(){
            expect(() => pizzUni.makeAnOrder({orderedPizza: ''})).to.throw(Error, 'You must order at least 1 Pizza to finish the order.')
        });
        it('should return message to pizza order when only orderedPizza is passed with the object',function(){
            expect(pizzUni.makeAnOrder({orderedPizza: 'Test Pizza'})).to.be.equal(`You just ordered Test Pizza`)
        });
        it('should return message to pizza order and drink when orderedPizza and drink is passed with the object',function(){
            expect(pizzUni.makeAnOrder({orderedPizza: 'Test Pizza', orderedDrink: 'Test Drink'})).to.be.equal(`You just ordered Test Pizza and Test Drink.`)
        });
    });
    describe("Test getRemainingWork functionality", function(){
        it('should return message for complete when all pizza names status is ready',function(){
            let pizzaArrayOnlyWithReadyPizzas = [
                {pizzaName: 'Test1', status: 'ready'},
                {pizzaName: 'Test2', status: 'ready'},
                {pizzaName: 'Test3', status: 'ready'}
            ]
            expect(pizzUni.getRemainingWork(pizzaArrayOnlyWithReadyPizzas)).to.be.equal('All orders are complete!')
        });
        it('should return message for pizzas still preparing when some pizza names status is preparing',function(){
            let pizzaArrayOnlyWitHAllTypeOfStatus = [
                {pizzaName: 'Test1', status: 'ready'},
                {pizzaName: 'Test2', status: 'preparing'},
                {pizzaName: 'Test3', status: 'preparing'},
                {pizzaName: 'Test4', status: 'ready'},
                {pizzaName: 'Test5', status: 'preparing'},
            ]
            expect(pizzUni.getRemainingWork(pizzaArrayOnlyWitHAllTypeOfStatus)).to.be.equal('The following pizzas are still preparing: Test2, Test3, Test5.')
        });
    });
    describe("Test orderType functionality", function(){
        it('should return totalSum when type is Delivery',function(){
            expect(pizzUni.orderType(100, 'Delivery')).to.be.equal(100)
            expect(pizzUni.orderType(100.1, 'Delivery')).to.be.equal(100.1)
        });
        it('should return totalSum with 10 percent discount when type is Carry Out',function(){
            expect(pizzUni.orderType(100, 'Carry Out')).to.be.equal(90)
            expect(pizzUni.orderType(100.1, 'Carry Out')).to.be.closeTo(90.09, 0.01)
        });
    });
})