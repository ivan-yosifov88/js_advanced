function calculateCircleArea(argument){
    let argumentType = typeof(argument);
    if (argumentType === 'number'){
        circleArea = Math.pow(argument,2) * Math.PI;
        console.log(circleArea.toFixed(2))
    }
    else{
        console.log(`We can not calculate the circle area, because we receive a ${argumentType}.`)
    }


}

calculateCircleArea(5)
calculateCircleArea('name')