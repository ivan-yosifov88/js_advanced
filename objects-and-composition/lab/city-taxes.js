function cityTaxes(name, population, treasury){
    let newCityRecord = {
        name : name,
        population : population,
        treasury : treasury,
        taxRate : 10,
        collectTaxes : function(){
            return this.treasury += this.population * this.taxRate
        }, 
        applyGrowth : function(percentage){
            return this.population += Math.floor(this.population * percentage / 100)},
        applyRecession : function(percentage){
            return this.treasury-= Math.ceil(this.treasury * percentage  / 100)},
    }
    return newCityRecord
}
// const city = 
//   cityTaxes('Tortuga',
//   7000,
//   15000);
// console.log(city);
console.log('------------------')
const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);

//{treasury => treasury += population * this.taxRate}