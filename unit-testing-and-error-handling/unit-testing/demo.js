let str = ''
let time = 10

for (let i = 0; i < time; i ++){
    if (i % 2 == 0){
        console.log('even', str)
        str += 'e'
    }else {
        console.log('odd', str)
        str += 'o'
    }
}