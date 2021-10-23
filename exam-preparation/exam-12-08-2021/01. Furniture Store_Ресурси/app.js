window.addEventListener('load', solve);

function solve() {
    const modelInput = document.querySelector('#model');
    const yearInput = document.querySelector('#year');
    const descriptionInput = document.querySelector('#description');
    const priceInput = document.querySelector('#price');
    const addButton = document.querySelector('#add');
    addButton.addEventListener('click', addToCart);

    function addToCart(event){
        event.preventDefault();
        if (isAllInputsAreValid()){

            const tbodyElement = document.querySelector('#furniture-list');
    
            const rowInfoTrElement = document.createElement('tr');
            rowInfoTrElement.classList.add('info');
            const furnitureTdElement = document.createElement('td');
            furnitureTdElement.textContent = modelInput.value;
            const priceTdElement = document.createElement('td');
            priceTdElement.textContent = Number(priceInput.value).toFixed(2);
    
            rowInfoTrElement.appendChild(furnitureTdElement);
            rowInfoTrElement.appendChild(priceTdElement);
    
            const tdElementForButtons = document.createElement('td');
    
            const moreInfoButton = document.createElement('button');
            moreInfoButton.classList.add('moreBtn');
            moreInfoButton.textContent = 'More Info';
            moreInfoButton.addEventListener('click', readMore)
    
            const buyButton = document.createElement('button');
            buyButton.classList.add('buyBtn');
            buyButton.textContent = 'Buy it';
            buyButton.addEventListener('click', buyProduct)
    
            tdElementForButtons.appendChild(moreInfoButton);
            tdElementForButtons.appendChild(buyButton);
    
            rowInfoTrElement.appendChild(tdElementForButtons);
    
            const hiddenRowTrElement = document.createElement('tr');
            hiddenRowTrElement.classList.add('hide');
            const yearTdElement = document.createElement('td');
            yearTdElement.textContent = `Year: ${yearInput.value}`
            const descriptionTdElement = document.createElement('td');
            descriptionTdElement.colSpan = 3;
            descriptionTdElement.textContent = `Description: ${descriptionInput.value}`;
    
            hiddenRowTrElement.appendChild(yearTdElement);
            hiddenRowTrElement.appendChild(descriptionTdElement);
    
            tbodyElement.appendChild(rowInfoTrElement);
            tbodyElement.appendChild(hiddenRowTrElement);
            clearInputFields()
        }else{
            clearInputFields()
        }
    }
    function readMore(event){
        const hiddenField = event.target.parentElement.parentElement.nextSibling;
        if (event.target.textContent == "Less Info"){
            event.target.textContent = "More Info";
        }else{
            event.target.textContent = 'Less Info';
        }
        if (hiddenField.style.display == 'contents'){
            hiddenField.style.display = 'none'
        }else{
            hiddenField.style.display = 'contents';
        }
    }

    function buyProduct(event){
        const totalPriceTdElement = document.querySelector('.total-price')
        let rowRecord = event.target.parentElement.parentElement
        let furniturePrice = Number(rowRecord.querySelectorAll(`.info td`)[1].textContent)
        let totalSum = Number(totalPriceTdElement.textContent) + furniturePrice
        totalPriceTdElement.textContent = totalSum.toFixed(2)
        rowRecord.remove()
    }
    

    function isAllInputsAreValid(){
        if (modelInput.value == '' || descriptionInput.value == ''){
            return false
        }
        if (yearInput.value == '' || isNaN(yearInput.value) || Number(yearInput.value) <= 0 || priceInput.value == '' || isNaN(priceInput.value) || Number(priceInput.value) <= 0){
            return false
        }
        return true

    }
    function clearInputFields(){
        modelInput.value = '';
        yearInput.value = '';
        descriptionInput.value = '';
        priceInput.value = '';
    }
}
