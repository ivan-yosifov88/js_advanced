function drawRectangleOfStars(countOfStars){
    const defaultStarsCount = 5
    const starSymbol = '* '
    if (countOfStars){
       printStars(Number(countOfStars), starSymbol); 
    }
    else{
        printStars(defaultStarsCount, starSymbol);
    }
    function printStars(countOfStars, starSymbol){
        for (let number = 1; number <= countOfStars; number ++)
            console.log(starSymbol.repeat(countOfStars))
    }
}
// drawRectangleOfStars(1)
// drawRectangleOfStars(2)
// drawRectangleOfStars(5)
drawRectangleOfStars()