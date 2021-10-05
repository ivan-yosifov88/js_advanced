function listProcessor(arrayOfStrings){
    let resultArray = [];

    let commandList = {
        add : (string) => resultArray.push(string),
        remove : (string) => resultArray = resultArray.filter(el => el != string),
        print : () => console.log(resultArray.join(','))
        } 
    for (let line of arrayOfStrings){
        let [command, string] = line.split(' ');
        if (command != 'print'){
            commandList[command](string)
        }else{
            commandList[command]()
        }
    }
}

listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print'])