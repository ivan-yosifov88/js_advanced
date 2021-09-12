function showAddAndRemoveCommands(commands){
    let initialNUmber = 1
    let resultArray = []
    commands.forEach((arr, i)=> {
        if (arr == 'add' ){
            resultArray.push(initialNUmber);
        }

        else if(arr == 'remove'){
            resultArray.pop();
        }
        initialNUmber ++
        
    })
    return 0 < resultArray.length ? resultArray.join('\n') : "Empty"
}

// console.log(showAddAndRemoveCommands(['add', 
// 'add', 
// 'add', 
// 'add']))
console.log(showAddAndRemoveCommands(['add', 
'add', 
'remove', 
'add', 
'add']))
console.log(showAddAndRemoveCommands(['remove', 
'remove', 
'remove']
))