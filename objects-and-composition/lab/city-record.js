function cityRecord(name, population, treasury){
    let newCityRecord = {
        name,
        population,
        treasury
    }
    return newCityRecord
}

console.log(cityRecord('Tortuga',
7000,
15000))