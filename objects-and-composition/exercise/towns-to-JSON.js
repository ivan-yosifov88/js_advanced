function townsCoordinate(arrayOfStrings){
    function TrimFilter(element){
            return element.trim()
        }

    function getData(arrayOfStrings){
        let info = []
        for (let line of arrayOfStrings){
            let currentLine = line
            .split('|')
            .filter(x => x !== '')
            .map(x => x.trim())
            info.push(currentLine)
        }
        return info
    }
    let data = getData(arrayOfStrings)
    let [[town, latitude, longitude], ...cityData] = data
    let tableOfTowns = []
    for (let line of cityData){
        let currentObj = {}
        let [city, cityLatitude, cityLongitude] = line
        currentObj[town] = city
        currentObj[latitude] = Number(Number(cityLatitude).toFixed(2))
        currentObj[longitude]= Number(Number(cityLongitude).toFixed(2))
        tableOfTowns.push(currentObj)
    }
    return JSON.stringify(tableOfTowns)
}

console.log(townsCoordinate(['| Town | Latitude | Longitude |',
'| So fia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
))