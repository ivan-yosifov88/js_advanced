function carFactory(car){
    let constructCar = {}
    constructCar['model'] = car.model
    const engineType = [
        {power: 90, volume: 1800},
        { power: 120, volume: 2400},
        {power: 200, volume: 3500},
    ]
    const carriageType = [
        { type: 'hatchback', color: ''},
        { type: 'coupe', color: ''}
    ]
    for (let engine of engineType){
        if (car.power <= engine.power){
            constructCar['engine'] = engine
            break
        }
    }
    for (let carType of carriageType){
        if (carType.type == car.carriage){
            carType.color = car.color
            constructCar['carriage'] = carType
        }
    }
    if (car.wheelsize % 2 == 0){
        car.wheelsize -= 1
    }
    constructCar['wheels'] = Array(4).fill(car.wheelsize)
    return constructCar  
}

console.log(carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
))

console.log(carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }))

