function carFactory(arrayOfStrings) {
    const carStorage = new Map();
    for (let item of arrayOfStrings) {
        let [carBrand, carModel, producedCars] = item.split(' | ');
        producedCars = Number(producedCars)
        if (!carStorage.has(carBrand)) {
            carStorage.set(carBrand, new Map())
        }
        let brandInCarStorage = carStorage.get(carBrand)
        if (!brandInCarStorage.has(carModel)) {
            brandInCarStorage.set(carModel, 0)
        }
        let currentProducedCars = brandInCarStorage.get(carModel)
        brandInCarStorage.set(carModel, currentProducedCars + producedCars)
    }
    for (const brand of carStorage.keys()) {
        console.log(brand)
        let currentBrand = carStorage.get(brand)
        for (let [model, quantity] of currentBrand) {
            console.log(`###${model} -> ${quantity}`)
        }
    }

}





console.log(carFactory(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']))

