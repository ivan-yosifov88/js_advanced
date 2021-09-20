function rectangle(width, height, color){
    function getColorWithFirstLetterUpper(word){
        return word[0].toUpperCase() + word.slice(1)
    }
    function calcArea(width, height){
        return this.width * this.height
    }
    return {
        width,
        height,
        color : getColorWithFirstLetterUpper(color),
        calcArea
    }
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());

