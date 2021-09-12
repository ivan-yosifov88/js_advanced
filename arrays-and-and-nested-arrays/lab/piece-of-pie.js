function getPiesInTarget(piesList, firstPie, secondPie){
    let startIndex = piesList.indexOf(firstPie)
    let endIndex = piesList.indexOf(secondPie) + 1
    let slicedPiesList = []
    slicedPiesList = piesList.slice(startIndex, endIndex)
    return slicedPiesList
}
console.log(getPiesInTarget(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'))
console.log("\n")
console.log(getPiesInTarget(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'))