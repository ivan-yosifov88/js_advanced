function townPopulation(arrayOfStrings){
    const townsAndPopulation = {};
    for (let element of arrayOfStrings){
        let [city, population] = element.split(' <-> ');
        population = Number(population)
        if (!townsAndPopulation.hasOwnProperty(city)){
            townsAndPopulation[city] = 0
        }
        townsAndPopulation[city] += population

    }
    for (const[key, value] of Object.entries(townsAndPopulation)){
        console.log(`${key} : ${value}`)
    }
}
townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
)