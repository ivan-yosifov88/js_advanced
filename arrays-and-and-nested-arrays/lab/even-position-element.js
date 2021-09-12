function getEvenPositionElements(numberList){
    let evenNUmbers = []
    for (let index = 0 ; index < numberList.length ; index += 2){
        evenNUmbers.push(numberList[index])
        

    }
    console.log(evenNUmbers.join(' '))
}
getEvenPositionElements(['20', '30', '40', '50', '60'])