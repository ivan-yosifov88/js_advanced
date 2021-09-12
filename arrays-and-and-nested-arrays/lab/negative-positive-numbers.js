function firstNegativeThanPositive(numberCollection){
    let newCollection = []
    for (number of numberCollection){
        if (0 <= number){
            newCollection.push(number)
        }
        else{
            newCollection.unshift(number)
        }
    }
    newCollection.forEach(element => console.log(element))
}
firstNegativeThanPositive([7, -2, 8, 9])
firstNegativeThanPositive([3, -2, 0, -1])