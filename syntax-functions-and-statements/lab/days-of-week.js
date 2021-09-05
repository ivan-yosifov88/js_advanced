function revertDaysOfWeekAsNumbers(dayOfWeek){
    let daysOfWeekAsNumber
    switch (dayOfWeek) {
        case 'Monday':
            daysOfWeekAsNumber = 1
            break;
        case 'Tuesday':
            daysOfWeekAsNumber = 2
            break;
        case 'Wednesday':
            daysOfWeekAsNumber = 3
            break;
        case 'Thursday':
            daysOfWeekAsNumber = 4
            break;
        case 'Friday':
            daysOfWeekAsNumber = 5
            break;
        case 'Saturday':
            daysOfWeekAsNumber = 6
            break;
        case 'Sunday':
            daysOfWeekAsNumber = 7
            break;
        default:
            daysOfWeekAsNumber = 'error'
            break;
    }
    return daysOfWeekAsNumber
}
console.log(revertDaysOfWeekAsNumbers('Monday'))
console.log(revertDaysOfWeekAsNumbers('Friday'))
console.log(revertDaysOfWeekAsNumbers('Invalid)'))