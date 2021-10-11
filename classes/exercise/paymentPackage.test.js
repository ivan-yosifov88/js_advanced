const { expect } = require('chai');
const { PaymentPackage } = require('./08. JS-Advanced-Classes-Exercise-Resources/12. PaymentPackage');

describe('Test class PaymentPackage', function(){
    describe('Test constructor functionality', function(){
        it ('should set properties when name and value are valid', function(){
            let testObject = new PaymentPackage ('Test', 100);
            expect(testObject).to.have.property('name', 'Test');
            expect(testObject).to.have.property('value', 100);
            expect(testObject).to.have.property('VAT', 20);
            expect(testObject).to.have.property('active', true);
        })
    });
    describe('Test setter and getter properties', function(){
        it ('should throw an Error when name is invalid and number is valid', function(){
            expect(()=> new PaymentPackage ('', 100)).to.throw(Error, 'Name must be a non-empty string');
            expect(()=> new PaymentPackage (true, 100)).to.throw(Error, 'Name must be a non-empty string');
            expect(()=> new PaymentPackage ([1] , 100)).to.throw(Error, 'Name must be a non-empty string');
            expect(()=> new PaymentPackage (1.23, 100)).to.throw(Error, 'Name must be a non-empty string');
            expect(()=> new PaymentPackage (1, 100)).to.throw(Error, 'Name must be a non-empty string');
        });
        it ('should throw an Error when name is valid and number is invalid', function(){
            expect(()=> new PaymentPackage ('Test', '')).to.throw(Error, 'Value must be a non-negative number');
            expect(()=> new PaymentPackage ('Test',true)).to.throw(Error, 'Value must be a non-negative number');
            expect(()=> new PaymentPackage ('Test',[1])).to.throw(Error, 'Value must be a non-negative number');
            expect(()=> new PaymentPackage ('Test', '1.23')).to.throw(Error, 'Value must be a non-negative number');
            expect(()=> new PaymentPackage ('Test',-1)).to.throw(Error, 'Value must be a non-negative number');
        });
        it ('should throw an Error when name and number are valid and try to set invalid active', function(){
            let testObject = new PaymentPackage ('Test', 100);
            expect(()=> testObject.active = '').to.throw(Error, 'Active status must be a boolean');
            expect(()=> testObject.active = 100).to.throw(Error, 'Active status must be a boolean');
            expect(()=> testObject.active = [1]).to.throw(Error, 'Active status must be a boolean');
            expect(()=> testObject.active = 1.23).to.throw(Error, 'Active status must be a boolean');
            expect(()=> testObject.active = {}).to.throw(Error, 'Active status must be a boolean');
        });
        it ('should throw an Error when name and number are valid and try to set invalid Vat', function(){
            let testObject = new PaymentPackage ('Test', 100);
            expect(()=> testObject.VAT = '').to.throw(Error, 'VAT must be a non-negative number');
            expect(()=> testObject.VAT = true).to.throw(Error, 'VAT must be a non-negative number');
            expect(()=> testObject.VAT = [1]).to.throw(Error, 'VAT must be a non-negative number');
            expect(()=> testObject.VAT = '1.23').to.throw(Error, 'VAT must be a non-negative number');
            expect(()=> testObject.VAT = -1).to.throw(Error, 'VAT must be a non-negative number');
        });
        it ('should set value to zero', function(){
            let testObject = new PaymentPackage ('Test', 0);
            expect(testObject).has.property('value', 0)
        });
        it ('should set VAT to zero', function(){
            let testObject = new PaymentPackage ('Test', 100);
            testObject.VAT = 0
            expect(testObject).has.property('VAT', 0)
        });
        it ('should set Name to Test2', function(){
            let testObject = new PaymentPackage ('Test', 100);
            testObject.name = "Test2"
            expect(testObject).has.property('name', 'Test2')
        });
        it ('should set active to false', function(){
            let testObject = new PaymentPackage ('Test', 100);
            testObject.active = false
            expect(testObject).has.property('active', false)
        });
    });
    describe('Test toString functionality', function(){
        it ('should append {inactive} when active property is false ', function(){
            let testObject = new PaymentPackage ('Test', 100);
            testObject.active = false
            let expectedResult = `Package: Test (inactive)\n- Value (excl. VAT): 100\n- Value (VAT 20%): 120`;
            expect((testObject.toString())).to.be.equal(expectedResult)
        });
        it ('should append empty string when active property is true', function(){
            let testObject = new PaymentPackage ('Test', 100);
            let expectedResult = `Package: Test\n- Value (excl. VAT): 100\n- Value (VAT 20%): 120`;
            expect((testObject.toString())).to.be.equal(expectedResult)
        });
    });
})