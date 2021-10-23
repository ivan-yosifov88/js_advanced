let ingredientInfo ='Tomato sauce 0.5'
let info = ingredientInfo.split(' ')
let price = info.pop()
let ingredientName = info.join(' ')
console.log(price, ingredientName)  