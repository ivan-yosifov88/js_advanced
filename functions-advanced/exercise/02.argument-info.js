// function argumentsInfo(...args){
//     const resultObject = {}
//     for (let arg of args){
//         if (resultObject[typeof(arg)] == undefined){
//             resultObject[typeof(arg)] = []
//         }
//         if (typeof(arg) == 'function'){
//             resultObject[typeof(arg)].push(arg.toString())
//         }else if (typeof(arg) == 'object'){
//             resultObject[typeof(arg)].push('')
//         }else{
//             resultObject[typeof(arg)].push(arg)
//         }
        
//     }
//     for (let [argType, argValue] of Object.entries(resultObject)){
//         for (let val of argValue){
//             console.log(`${argType}: ${val}`)
//         }
//     }
//     let arrayOfObjects= []
//     for (let obj in resultObject){
//         arrayOfObjects.push([obj, resultObject[obj].length])
//     }
//     arrayOfObjects
//     .sort((a,b) => b[1] - a[1])
//     .forEach(x => console.log(`${x[0]} = ${x[1]}`))
// }

function argumentsInfo(...args){
    const resultObject = {}
    const argsResult = [];

    for (let arg of args){
        if (resultObject[typeof(arg)] == undefined){
            resultObject[typeof(arg)] = 0
        }
        resultObject[typeof(arg)] ++
        argsResult.push(`${typeof(arg)}: ${arg}`)
    }

    Object.keys(resultObject)
    .sort((a, b) => resultObject[b] - resultObject[a])
    .forEach(key => argsResult.push(`${key} = ${resultObject[key]}`));

    console.log(argsResult.join('\n'))
}
// argumentsInfo({ name: 'bob'}, 3.333, 9.999)

argumentsInfo('cat', 42, 43, function () { console.log('Hello world!'); }
)

