function calculateMoneyNeeded(typeOfFruit, weightInGrams, price){
    let weightInKilograms = Number(weightInGrams) / 1000
    let pricePerKilogram = Number(price)
    let neededMoney = pricePerKilogram * weightInKilograms
    console.log(`I need $${neededMoney.toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${typeOfFruit}.`)
}
calculateMoneyNeeded('orange', 2500, 1.80)
calculateMoneyNeeded('apple', 1563, 2.35)