function lowestPriceInCIties(arrayOfStrings){
    const productPriceInTowns = {}
    for (let line of arrayOfStrings){
        let [town, product, price] = line.split(' | ');
        price = Number(price)
        if (!productPriceInTowns.hasOwnProperty(product)){
            productPriceInTowns[product] = {town, price}
        }else{
            productPriceInTowns[product] = productPriceInTowns[product].price <= price ?
            productPriceInTowns[product] : {town, price}
        }
    }
    for (let [productName, value] of Object.entries(productPriceInTowns)){
        let productLowestPrice = value.price;
        let townName = value.town
        console.log(`${productName} -> ${productLowestPrice} (${townName})`)
    }


}

// Only this decision work but I'm not sure that is right.
function printLowestPrices(params) {
    let stat = new Map();

    for (const row of params) {
        let [town, product, price] = row.split('|').map(e => e.trim());

        if (!stat.get(product)) {
            stat.set(product, new Map());
        }

        stat.get(product).set(town, Number(price));
    }

    let result = '';

    for (const kvp of stat) {
        let lowestPrice = [...kvp[1]].sort((a, b) => a[1] - b[1])[0];
        result += `${kvp[0]} -> ${lowestPrice[1]} (${lowestPrice[0]})\n`;
    }

    console.log(result.trim());
}
printLowestPrices(['Sofia City | Audi | 100000',
                    'Sofia City | BMW | 100000',
                    'Sofia City | Mitsubishi | 10000',
                    'Sofia City | Mercedes | 10000',
                    'Sofia City | NoOffenseToCarLovers | 0',
                    'Mexico City | Audi | 1000',
                    'Mexico City | BMW | 99999',
                    'New York City | Mitsubishi | 10000',
                    'New York City | Mitsubishi | 1000',
                    'Mexico City | Audi | 100000',
                    'Washington City | Mercedes | 1000'])

// printLowestPrices(['Sample Town | Sample Product | 1000',
// 'Sample Town | Orange | 2',
// 'Sample Town | Peach | 1',
// 'Sofia | Orange | 3',
// 'Sofia | Peach | 2',
// 'New York | Sample Product | 1000.1',
// 'New York | Burger | 10'])

// TODO

function solve(arrayOfStrings){
    const productPricesInTowns = {}
    for (line of arrayOfStrings){
    let [town, product, price] = line.split(' | ');
    price = Number(price);
    if (!productPricesInTowns.hasOwnProperty(product)){
        productPricesInTowns[product] = {town, price};
    }else{
        productPricesInTowns[product] = productPricesInTowns[product].price <= price ? productPricesInTowns[product] : {town, price};
        }   
    }
    const result = []
    for (const product in productPricesInTowns){
        result.push(`${product} -> ${productPricesInTowns[product].price} (${productPricesInTowns[product].town})`)
    }
    console.log(result.join('\n'))
}
solve(['Sofia City | Audi | 100000',
'Sofia City | BMW | 100000',
'Sofia City | Mitsubishi | 10000',
'Sofia City | Mercedes | 10000',
'Sofia City | NoOffenseToCarLovers | 0',
'Mexico City | Audi | 1000',
'Mexico City | BMW | 99999',
'New York City | Mitsubishi | 10000',
'New York City | Mitsubishi | 1000',
'Mexico City | Audi | 100000',
'Washington City | Mercedes | 1000'])
