function filterEmployees(data, criteria){
    let dataList = JSON.parse(data)
    result = []
    if (criteria == "all"){
        let id = 0
        for (let employee of dataList){
            let formatter = `${id}. ${employee.first_name} ${employee.last_name} - ${employee.email}`;
            result.push(formatter)
            id ++
        }
    }else{
        id = 0
        let [key, value] = criteria.split('-')
        for (let employee of dataList){
            if (employee[key] == value){
                let formatter = `${id}. ${employee.first_name} ${employee.last_name} - ${employee.email}`;
                result.push(formatter)
                id ++
            }
        }
    }
    console.log(result.join('\n'))
}



filterEmployees(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
 'all')