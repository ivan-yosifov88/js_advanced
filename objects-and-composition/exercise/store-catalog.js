function storeCatalog(arrayOfStrings){
    function createProductList(arrayOfStrings){
        for (const line of arrayOfStrings){
            let [product, price] = line.split(' : ')
            productsList[product] = Number(price)
        }
    }
    function sortAlphabeticalCaseInsensitiveProducts(a, b){
        return a[0].localeCompare(b[0])
    }
    function getFirstChars(sortedProducts){
        let firstChars= [];
        for (element of sortedProducts){
            let char = element[0][0];
            if (!firstChars.includes(char)){
                firstChars.push(char);
            }
        }
        return firstChars
    }
    
    let productsList = {}
    createProductList(arrayOfStrings)
    sortedProducts = Object.entries(productsList).sort(sortAlphabeticalCaseInsensitiveProducts)
    let firstChars = getFirstChars(sortedProducts)
    for (let char of firstChars){
        console.log(char)
        for (let element of sortedProducts){
            if (element[0][0] == char){
                let productName = element[0]
                let productPrice = element[1]
                console.log(  `${productName}: ${productPrice}`)
            }
        }
    }
        
}

storeCatalog(['Banana : 2',
'Rubics Cube : 5',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10'])