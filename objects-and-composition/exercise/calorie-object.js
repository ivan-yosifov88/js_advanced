function calorieObject(arrayOfStrings){
    resultCalorieObject = {}
    for (let index = 0; index < arrayOfStrings.length; index += 2){
        resultCalorieObject[arrayOfStrings[index]] = Number(arrayOfStrings[index + 1])
    }
    return resultCalorieObject
}
console.log(calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']))
