function filterArrayByStep(arrayOfStrings, step){
    return arrayOfStrings.filter((arr, i) => i % step == 0)
}
console.log(filterArrayByStep(['5', 
'20', 
'31', 
'4', 
'20'], 
2
))
console.log(filterArrayByStep(['dsa',
'asd', 
'test', 
'tset'], 
2))
console.log(filterArrayByStep(['1', 
'2',
'3', 
'4', 
'5'], 
6
))