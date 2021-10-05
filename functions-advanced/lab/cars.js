function carFunctions(arrayOfStrings) {
    let carObjects = {};

    for (let line of arrayOfStrings) {
        line = line.split(' ')
        let command = line[0];
        let name = line[1];
        if (command == 'create') {
            if (line.length > 2) {
                let parentName = line[3]
                carObjects[name] = Object.create(carObjects[parentName]);
            } else {
                carObjects[name] = {};
            }
        } else if (command == 'set') {
            let key = line[2]
            let value = line[3]
            carObjects[name][key] = value;
        } else if (command == 'print') {
            let result = []
            for (let prop in carObjects[name]){
                result.push(`${prop}:${carObjects[name][prop]}`)
            }
            console.log(result.join(','))
        }
    }
}




function cars(input) {
    let carsObject = {};
    for (let item of input) {
        let [command, item1, ...rest] = item.split(' ');
        let [command2, item2] = rest ? rest : [];
        if (command == 'create') {
            if (command2 == 'inherit') {
                carsObject[item1] = Object.create(carsObject[item2]);
            } else {
                carsObject[item1] = {};
            }
        } else if (command == 'set') {
            let [key, value] = rest;
            carsObject[item1][key] = value;
        } else if (command == 'print') {
            let entry = []
            for (let property in carsObject[item1]) {
                entry.push(`${property}:${carsObject[item1][property]}`)
            }
            console.log(entry.join(","))
        }
    }
}

cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'])
carFunctions(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2'])