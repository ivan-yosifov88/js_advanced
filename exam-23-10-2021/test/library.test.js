const {expect} = require('chai');
const {library} = require('../library');

describe("Test library functionality", function(){
    describe('Test calcPriceOfBook functionality', function(){
        it ('should throw Error when name of book is not string', function(){
            expect(()=> library.calcPriceOfBook(1, 1980)).to.throw(Error, "Invalid input")
            expect(()=> library.calcPriceOfBook(undefined, 1980)).to.throw(Error, "Invalid input")
            expect(()=> library.calcPriceOfBook([1, 2], 1980)).to.throw(Error, "Invalid input")
        });
        it ('should throw Error when year of book is not integer', function(){
            expect(()=> library.calcPriceOfBook('Test Book', '1980')).to.throw(Error, "Invalid input")
            expect(()=> library.calcPriceOfBook('Test Book', undefined)).to.throw(Error, "Invalid input")
            expect(()=> library.calcPriceOfBook('Test Book', 19.8)).to.throw(Error, "Invalid input")
        });
        it ('should reduce price and return message when year is less or equal to 1980', function(){
            expect(library.calcPriceOfBook('Test Book', 1980)).to.be.equal(`Price of Test Book is 10.00`)
            expect(library.calcPriceOfBook('Test Book', 1979)).to.be.equal(`Price of Test Book is 10.00`)
            expect(library.calcPriceOfBook('Test Book', 1900)).to.be.equal(`Price of Test Book is 10.00`)
        });
        it ('should not reduce price and return message when year is greater to 1980', function(){
            expect(library.calcPriceOfBook('Test Book', 1981)).to.be.equal(`Price of Test Book is 20.00`)
            expect(library.calcPriceOfBook('Test Book', 1990)).to.be.equal(`Price of Test Book is 20.00`)
            expect(library.calcPriceOfBook('Test Book', 2000)).to.be.equal(`Price of Test Book is 20.00`)
        });
    });
    describe('Test findBook functionality', function(){
        it ('should throw Error when bookArr length is equal to 0', function(){
            expect(()=> library.findBook([], 'Test Book')).to.throw(Error, "No books currently available")
        });
        it ('should return message for founding the book when book is in BookArr', function(){
            expect(library.findBook(['Test Book', 'Test Book2'], 'Test Book')).to.be.equals("We found the book you want.")
        });
        it ('should return message for not found the book when book is not in BookArr', function(){
            expect(library.findBook(['Test Book2', 'Test Book3'], 'Test Book')).to.be.equals("The book you are looking for is not here!")
        });
    });
    describe('Test arrangeTheBooks functionality', function(){
        it ('should throw Error when countBooks is not number', function(){
            expect(()=> library.arrangeTheBooks('a')).to.throw(Error, "Invalid input");
            expect(()=> library.arrangeTheBooks('1')).to.throw(Error, "Invalid input");
            expect(()=> library.arrangeTheBooks(1.99)).to.throw(Error, "Invalid input");
        });
        it ('should throw Error when countBooks is negative number', function(){
            expect(()=> library.arrangeTheBooks(-1)).to.throw(Error, "Invalid input");
            expect(()=> library.arrangeTheBooks(-10)).to.throw(Error, "Invalid input");
        });
        it ('should return positive message when countBooks are less or equal to 40', function(){
            expect(library.arrangeTheBooks(0)).to.be.equal("Great job, the books are arranged.")
            expect(library.arrangeTheBooks(1)).to.be.equal("Great job, the books are arranged.")
            expect(library.arrangeTheBooks(39)).to.be.equal("Great job, the books are arranged.")
            expect(library.arrangeTheBooks(40)).to.be.equal("Great job, the books are arranged.")
        });
        it ('should return negative message when countBooks are greater than 40', function(){
            expect(library.arrangeTheBooks(41)).to.be.equal("Insufficient space, more shelves need to be purchased.")
            expect(library.arrangeTheBooks(400)).to.be.equal("Insufficient space, more shelves need to be purchased.")
        });
    });
})