const { expect } = require('chai');
const { StringBuilder } = require('../exercise/08. JS-Advanced-Classes-Exercise-Resources/13. StringBuilder');

describe("Test class StringBuilder", function(){
    describe('Test constrictor functionality', function(){
        it('should set correct when pass correct string', function(){
            expect(new StringBuilder('Test').toString()).to.be.equal('Test')
        });
        it('should set correct when pass empty nothing', function(){
            expect(new StringBuilder(undefined).toString()).to.be.equal('')
            expect(new StringBuilder('').toString()).to.be.equal('')
        });
    });
    describe('Test verification of the parameters _vrfyParam method', function(){
        it('should throw TypeError when parameter is not string', function(){
            let errorMessage = 'Argument must be a string'
            let testObject = new StringBuilder('Test')
            expect(()=> StringBuilder._vrfyParam([1])).to.throw(TypeError, errorMessage)
            expect(()=> StringBuilder._vrfyParam({})).to.throw(TypeError, errorMessage)
            expect(()=> StringBuilder._vrfyParam(undefined)).to.throw(TypeError, errorMessage)
            expect(()=> StringBuilder._vrfyParam(null)).to.throw(TypeError, errorMessage)
            expect(()=> StringBuilder._vrfyParam(1)).to.throw(TypeError, errorMessage)
            expect(()=> StringBuilder._vrfyParam(1, 23)).to.throw(TypeError, errorMessage)
        });
        
    });
    describe('Test append method', function(){
        it('should append chars at the end of the string', function(){
            let testObject = new StringBuilder('Test')
            testObject.append('1')
            expect(testObject.toString()).to.be.equal('Test1')
            testObject.append('2ab')
            expect(testObject.toString()).to.be.equal('Test12ab')
            testObject.append('')
            expect(testObject.toString()).to.be.equal('Test12ab')
            
            let testObject2 = new StringBuilder('Test2')
            testObject2.append('')
            expect(testObject2.toString()).to.be.equal('Test2')
        });
        
    });
    describe('Test prepend method', function(){
        it('should prepend chars at the start of the string', function(){
            let testObject = new StringBuilder('Test')
            testObject.prepend('1')
            expect(testObject.toString()).to.be.equal('1Test')
            testObject.prepend('2ab')
            expect(testObject.toString()).to.be.equal('2ab1Test')
            testObject.prepend('')
            expect(testObject.toString()).to.be.equal('2ab1Test')
            
            let testObject2 = new StringBuilder('Test2')
            testObject2.prepend('')
            expect(testObject2.toString()).to.be.equal('Test2')
        });
        
    });
    describe('Test insertAt method', function(){
        it('should insert chars at the given valid start index of the string ', function(){
            let testObject = new StringBuilder('Test')
            testObject.insertAt('New', 0)
            expect(testObject.toString()).to.be.equal('NewTest')
            testObject.insertAt('End', 7)
            expect(testObject.toString()).to.be.equal('NewTestEnd')
            testObject.insertAt('Inner', 3)
            expect(testObject.toString()).to.be.equal('NewInnerTestEnd')
            
            let testObject2 = new StringBuilder('Test2')
            testObject2.insertAt('', 3)
            expect(testObject2.toString()).to.be.equal('Test2')
        });
        
    });
    describe('Test remove method', function(){
        it('should remove chars at the given valid start index of the string ', function(){
            let testObject = new StringBuilder('TestRemove')
            testObject.remove(4, 6)
            expect(testObject.toString()).to.be.equal('Test')
            testObject.remove(0, 1)
            expect(testObject.toString()).to.be.equal('est')
            testObject.remove(0, 3)
            expect(testObject.toString()).to.be.equal('')
            
            let testObject2 = new StringBuilder('Test2')
            testObject2.remove(0, 0)
            expect(testObject2.toString()).to.be.equal('Test2')
        });
        
    });
})