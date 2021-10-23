class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }
    loadProducts(listOfProductsInfo) {
        for (let line of listOfProductsInfo) {
            let [nameOfProduct, quantityOfProduct, totalPriceOfProduct] = line.split(' ')
            quantityOfProduct = Number(quantityOfProduct);
            totalPriceOfProduct = Number(totalPriceOfProduct);
            if (this._isBudgetEnoughToByProduct(totalPriceOfProduct)) {
                this.budgetMoney -= totalPriceOfProduct
                if (this._isProductInStock(nameOfProduct) == false) {
                    this.stockProducts[nameOfProduct] = {
                        quantityOfProduct,
                    }
                } else {
                    this.stockProducts[nameOfProduct].quantityOfProduct += quantityOfProduct
                }
                this.history.push(`Successfully loaded ${quantityOfProduct} ${nameOfProduct}`)
            }else{
                this.history.push(`There was not enough money to load ${quantityOfProduct} ${nameOfProduct}`)
            }
        }
        return this.history.join('\n')
    }
    _isProductInStock(productName) {
        return Object.keys(this.stockProducts).includes(productName)
    };
    _isBudgetEnoughToByProduct(productPrice) {
        return productPrice <= this.budgetMoney
    };
    addToMenu(meal, products, price){
        if (this._isMealInMenu(meal)){
            return `The ${meal} is already in the our menu, try something different.`;
        }
        this.menu[meal] = {products, price: Number(price)};
        let numberOfMealsInMenu = Object.keys(this.menu).length
        if (numberOfMealsInMenu == 1){
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
        }
        return `Great idea! Now with the ${meal} we have ${numberOfMealsInMenu} meals in the menu, other ideas?`
    };
    _isMealInMenu(mealName){
        return Object.keys(this.menu).includes(mealName)
    };
    showTheMenu(){
        if (this._isMenuEmpty()){
            return "Our menu is not ready yet, please come later..."
        }
        let menuOfAllMeals = []
        for (let [meal, mealInfo] of Object.entries(this.menu)){
            menuOfAllMeals.push(`${meal} - $ ${mealInfo.price}`)
        }
        return menuOfAllMeals.join('\n')
    };
    _isMenuEmpty(){
        return Object.keys(this.menu).length == 0
    };
    makeTheOrder(meal){
        if (this._isMealInMenu(meal) == false){
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }
        if (this._isAllNeededProductAreAvailable(meal) == false){
            return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
        }
        let mealPrice = this.menu[meal].price
        this._reduceStockProduct(meal, this.menu[meal].products)
        this.budgetMoney += mealPrice
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${mealPrice}.`
    };
    _isAllNeededProductAreAvailable(meal){
        let productList = this.menu[meal]
        for (let lineOfRecord of productList.products){
            let [nameOfIngredient, quantityOfIngredient] = lineOfRecord.split(' ');
            quantityOfIngredient = Number(quantityOfIngredient)
            if (this.stockProducts[nameOfIngredient] == undefined || quantityOfIngredient > this.stockProducts[nameOfIngredient].quantityOfProduct){
                return false
            }
        }
        return true
    };
    _reduceStockProduct(meal, productList){
        for (let lineOfRecord of productList){
            let[nameOfIngredient, quantityOfIngredient] = lineOfRecord.split(' ');
            quantityOfIngredient = Number(quantityOfIngredient)
            this.stockProducts[nameOfIngredient].quantityOfProduct -= quantityOfIngredient
        }
    }
}

let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log()
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log()
console.log(kitchen.showTheMenu());
console.log()
console.log(kitchen.makeTheOrder('frozenYogurt'))
console.log(kitchen.makeTheOrder('Pizza'))
