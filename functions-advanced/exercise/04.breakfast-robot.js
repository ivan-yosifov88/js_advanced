function solution() {
    const availableIngredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }
    const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    }
    function manager(line) {
        let [command, item, quantity] = line.split(' ');
        const robotFunctions = {
            'restock': restock(item, quantity),
            'prepare': prepare(item,quantity),
            'report': report()
        }
        function prepare(item, quantity) {
            let productIngredients = {}
            for (let ingredient in recipes[item]) {
                if (recipes[item][ingredient] * Number(quantity) > availableIngredients[ingredient]) {
                    return `Error: not enough ${ingredient} in stock`
                }
                productIngredients[ingredient] = availableIngredients[ingredient] - recipes[item][ingredient] * quantity;
            }
            Object.assign(availableIngredients, productIngredients)
            return 'Success'
        }
        function restock(item, quantity) {
            if (availableIngredients[item] != undefined) {
                availableIngredients[item] += Number(quantity)
                return 'Success'
            }
        }
        function report() {
            return `protein=${availableIngredients.protein} carbohydrate=${availableIngredients.carbohydrate} fat=${availableIngredients.fat} flavour=${availableIngredients.flavour}`
        }
        return robotFunctions[command]
    }
    return manager
}
// function manager(line) {
//     if (line == 'report') {
//         return `protein=${availableIngredients.protein} carbohydrate=${availableIngredients.carbohydrate} fat=${availableIngredients.fat} flavour=${availableIngredients.flavour}`
//     }
//     let [command, item, quantity] = line.split(' ');
//     if (command == 'restock') {
//         if (availableIngredients[item] != undefined) {
//             availableIngredients[item] += Number(quantity)
//             return 'Success'
//         }
//     } else if (command == 'prepare') {
//         let productIngredients = {}
//         let isSuccess = true
//         for (let ingredient in recipes[item]) {

//             if (recipes[item][ingredient] * Number(quantity) > availableIngredients[ingredient]) {
//                 isSuccess = false
//                 return `Error: not enough ${ingredient} in stock`
//                 break
//             }
//             productIngredients[ingredient] = availableIngredients[ingredient] - recipes[item][ingredient] * quantity;

//         }
//         if (isSuccess) {
//             Object.assign(availableIngredients, productIngredients)
//             return 'Success'
//         }
//     }


// }



let manager = solution();
// console.log(manager("restock flavour 50")); // Success 
// console.log(manager("prepare lemonade 4")); //
// console.log(manager('restock carbohydrate 10'))
// console.log(manager('restock flavour 10'))
// console.log(manager('prepare apple 1'))
// console.log(manager('restock fat 10'))
// console.log(manager('prepare burger 1'))
// console.log(manager('report'))


console.log(manager('prepare turkey 1', 'Error: not enough protein in stock'))
console.log(manager('restock protein 10', 'Success'))
console.log(manager('prepare turkey 1', 'Error: not enough carbohydrate in stock'))
console.log(manager('restock carbohydrate 10', 'Success'))
console.log(manager('restock carbohydrate 10', 'Success'))
console.log(manager('prepare turkey 1', 'Error: not enough fat in stock'))
console.log(manager('restock fat 10', 'Success'))

console.log(manager('prepare turkey 1', 'Error: not enough flavour in stock'))

console.log(manager('restock flavour 10', 'Success'))
console.log(manager('prepare turkey 1', 'Success'))
console.log(manager('report', 'protein=0 carbohydrate=0 fat=0 flavour=0'))


