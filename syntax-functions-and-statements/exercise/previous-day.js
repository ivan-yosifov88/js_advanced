function previousDay(year, month, day){
    let today = new Date(year, month - 1, day)
    let yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate()  - 1)
    return `${yesterday.getFullYear()}-${yesterday.getMonth()+ 1}-${yesterday.getDate()}`
}


console.log(previousDay(2016, 9, 30))
console.log(previousDay(2016, 10, 1))

// var date = new Date();

// date ; //# => Fri Apr 01 2011 11:14:50 GMT+0200 (CEST)

// date.setDate(date.getDate() - 1);

// console.log(