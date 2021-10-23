const {expect} = require('chai');
const {cinema} = require('../exam-12-08-2021/03. Cinema_Ресурси/cinema');


describe('Test cinema functionality', function(){
    describe("Test showMovies functionality", function(){
        let availableMoviesArray = ['King Kong', 'The Tomorrow War', 'Joker']
        let expectedStringMovieArray = 'King Kong, The Tomorrow War, Joker';
        let emptyArray = []
        let expectedMessageWhenArrayIsEmpty = 'There are currently no movies to show.'
        it('Should return correct string result when available movies in movieArr', function(){
            expect(cinema.showMovies(availableMoviesArray)).to.be.equal(expectedStringMovieArray);
            expect(cinema.showMovies(['King Kong', 'The Tomorrow War'])).to.be.equal('King Kong, The Tomorrow War');
            expect(cinema.showMovies(['King Kong'])).to.be.equal('King Kong');
        });
        it('Should return failure message when available movies is empty array', function(){
            expect(cinema.showMovies(emptyArray)).to.be.equal(expectedMessageWhenArrayIsEmpty);
        });
    });
    describe("Test ticketPrice functionality", function(){
        let wrongProjectionType = "Test";
        let errorMessageWhenProjectionTypeIsWrong = 'Invalid projection type.'
        let ValidProjectionType = "Premiere";
        let valueOfPremiereType = 12.00;

        it('Should throw error when projectionType is invalid', function(){
            expect(() => cinema.ticketPrice(wrongProjectionType)).to.throw(Error, errorMessageWhenProjectionTypeIsWrong);
            expect(() => cinema.ticketPrice('te')).to.throw(Error, errorMessageWhenProjectionTypeIsWrong);
            expect(() => cinema.ticketPrice('')).to.throw(Error, errorMessageWhenProjectionTypeIsWrong);
            expect(() => cinema.ticketPrice({})).to.throw(Error, errorMessageWhenProjectionTypeIsWrong);
            expect(() => cinema.ticketPrice([])).to.throw(Error, errorMessageWhenProjectionTypeIsWrong);
            expect(() => cinema.ticketPrice(1)).to.throw(Error, errorMessageWhenProjectionTypeIsWrong);
            expect(() => cinema.ticketPrice(1.2)).to.throw(Error, errorMessageWhenProjectionTypeIsWrong);
            expect(() => cinema.ticketPrice(undefined)).to.throw(Error, errorMessageWhenProjectionTypeIsWrong);

        });
        it('Should return correct value when projection type is valid', function(){
            expect(cinema.ticketPrice(ValidProjectionType)).to.be.equal(valueOfPremiereType);
            expect(cinema.ticketPrice('Normal')).to.be.equal(7.50);
            expect(cinema.ticketPrice('Discount')).to.be.equal(5.50);
        });
    });
    describe("Test  swapSeatsInHall functionality", function(){
        let unsuccessfulMessage = "Unsuccessful change of seats in the hall.";
        let successfulMessage = "Successful change of seats in the hall.";
        it('Should return unsuccessful message when the input is not correct', function(){
            expect(cinema.swapSeatsInHall()).to.be.equal(unsuccessfulMessage);
            expect(cinema.swapSeatsInHall(1)).to.be.equal(unsuccessfulMessage);
            expect(cinema.swapSeatsInHall('1', 10)).to.be.equal(unsuccessfulMessage);
            expect(cinema.swapSeatsInHall([], 1)).to.be.equal(unsuccessfulMessage);
            expect(cinema.swapSeatsInHall({}, 1)).to.be.equal(unsuccessfulMessage);
            expect(cinema.swapSeatsInHall(1, 21)).to.be.equal(unsuccessfulMessage);
            expect(cinema.swapSeatsInHall(-1, 19)).to.be.equal(unsuccessfulMessage);
            expect(cinema.swapSeatsInHall(0, 19)).to.be.equal(unsuccessfulMessage);
            expect(cinema.swapSeatsInHall(1.2, 19)).to.be.equal(unsuccessfulMessage);
            expect(cinema.swapSeatsInHall(1, 1)).to.be.equal(unsuccessfulMessage);
            expect(cinema.swapSeatsInHall(0, 1.2)).to.be.equal(unsuccessfulMessage);
            expect(cinema.swapSeatsInHall(1, -1)).to.be.equal(unsuccessfulMessage);
            expect(cinema.swapSeatsInHall(undefined, 1)).to.be.equal(unsuccessfulMessage);
            expect(cinema.swapSeatsInHall(1, undefined)).to.be.equal(unsuccessfulMessage);
            expect(cinema.swapSeatsInHall(1, "")).to.be.equal(unsuccessfulMessage);
            expect(cinema.swapSeatsInHall('', 1)).to.be.equal(unsuccessfulMessage);
            expect(cinema.swapSeatsInHall(1, "Test")).to.be.equal(unsuccessfulMessage);
            expect(cinema.swapSeatsInHall('Test', 1)).to.be.equal(unsuccessfulMessage);
            expect(cinema.swapSeatsInHall('1', )).to.be.equal(unsuccessfulMessage);
        });
        it('Should return successful message when the input is correct', function(){
            expect(cinema.swapSeatsInHall(1, 5)).to.be.equal(successfulMessage);
            expect(cinema.swapSeatsInHall(2, 10)).to.be.equal(successfulMessage);
            expect(cinema.swapSeatsInHall(3, 15)).to.be.equal(successfulMessage);
        });
    });
})