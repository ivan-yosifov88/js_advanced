class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    };
    get budget() {
        return this._budget
    };
    set budget(value) {
        if (value < 0) {
            throw new Error("The budget cannot be a negative number");
        };
        this._budget = value;
    };
    shopping(product) {
        let [productType, productPrice] = product;
        if (productPrice > this.budget) {
            throw new Error("Not enough money to buy this product");
        };
        this.budget -= productPrice;
        this.products.push(productType);
        return `You have successfully bought ${productType}!`
    };
    recipes(recipe) {
        // let {recipeName, productsList} = recipe
        let neededProductsForRecipe = recipe.productsList
        if (neededProductsForRecipe.every(product => this.products.includes(product)) == false) {
            throw new Error("We do not have this product");
        };
        this.dishes.push({
            'recipeName': recipe.recipeName,
            'productsList': recipe.productsList
        });
        return `${recipe.recipeName} has been successfully cooked!`;
    };
    inviteGuests(name, dish) {
        if (this.dishes.some(record => record.recipeName == dish) == false) {
            throw new Error("We do not have this dish");
        };
        if (Object.keys(this.guests).includes(name)) {
            throw new Error("This guest has already been invited");
        };
        this.guests[name] = dish ;
        return `You have successfully invited ${name}!`;
    };
    showAttendance(){
        let resultedText = [];
        for (let [name, dish] of Object.entries(this.guests)){
            let currentProduct = this.dishes.find(currentRecipe => currentRecipe.recipeName == dish).productsList.join(', ')
            resultedText.push(`${name} will eat ${dish}, which consists of ${currentProduct}`)
        }
        return resultedText.join('\n')
    }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
