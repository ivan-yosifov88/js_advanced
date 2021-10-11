function juiceFactory(arrayOfStrings) {
    const bottleCapacity = 1000;
    const juiceStorage = new Map();
    const producedBottles = new Map();

    for (let line of arrayOfStrings) {
        let [product, capacity] = line.split(' => ');
        capacity = Number(capacity)
        if (!juiceStorage.has(product)) {
            juiceStorage.set(product, capacity)
        } else {
            let productQuantity = juiceStorage.get(product)
            productQuantity += capacity
            juiceStorage.set(product, productQuantity)
        }
        let currentProductCapacity = juiceStorage.get(product)
        if (currentProductCapacity >= bottleCapacity){
            let currentProducedBottles = Math.trunc(currentProductCapacity / bottleCapacity)
            let productCapacityLeft = currentProductCapacity - currentProducedBottles * bottleCapacity
            if (producedBottles.has(product)){
                let bottles = producedBottles.get(product)
                bottles += currentProducedBottles
                producedBottles.set(product, bottles)
            }else{
                producedBottles.set(product, currentProducedBottles)
            }
            juiceStorage.set(product, productCapacityLeft)
        }
    }
    
    let finalGeneratedBottles = []
    for (let [productName, bottlesQuantity] of producedBottles){
        finalGeneratedBottles.push(`${productName} => ${bottlesQuantity}`)
    }
    return finalGeneratedBottles.join('\n')
}



console.log(juiceFactory(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']))


console.log(juiceFactory(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']))
