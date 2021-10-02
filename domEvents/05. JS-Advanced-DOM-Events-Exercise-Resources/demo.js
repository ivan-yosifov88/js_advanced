let arr = [1, 2, 4]
let matches = {
    1:0,
    2:0,
    3:0
}
arr.forEach(el => matches[el]++)
console.log(matches)
console.log(Object.values(matches))
if (Object.values(matches).every(x => x == 1 )){
    console.log(true)
}else{
    console.log(false)
}