function generateReport() {
    const tableHeader = document.querySelectorAll('thead tr th input');

    const textAreaForResult = document.querySelector('#output')

    const tableRows = document.querySelectorAll('tbody tr')

    const checkedHeads = {}
    
    for (let index  = 0; index < tableHeader.length; index ++){
        if (tableHeader[index].checked){
            let headName = tableHeader[index].name
            checkedHeads[headName] = index
        }
    }

    let report = []
    for (let element of tableRows){ 
        let rowReport = {}
        for (let [head, i] of Object.entries(checkedHeads)){
            rowReport[head] = element.children[i].textContent
        }
        report.push(rowReport)
    }
    let resultAsJSON = JSON.stringify(report)
    textAreaForResult.textContent = resultAsJSON
}