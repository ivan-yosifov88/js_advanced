function sumTable() {
    let table = document.querySelectorAll('table tr');
    let result = 0
    for (let index = 1; index < table.length; index ++){
        let columns = table[index].children;
        result += Number(columns[columns.length - 1].textContent)
    }
    document.getElementById('sum').textContent = result
} 