function createFigure(){
    class Figure{
        constructor(){
            this.validUnits = {
                'mm': 10,
                'cm': 1,
                'm': 0.1
            }
            this.units = 'cm';
        }
        get area(){
            return null
        }
        changeUnits(unit){
            if (this.validUnits[unit] != undefined){
                this.units = unit
            }
        }
        changeParameterValue(parameter){
            return parameter *= this.validUnits[this.units]
        }

        toString(){
            return `Figures units: ${this.units}`
        }
    }
    class Circle extends Figure{
        constructor(radius){
            super()
            this._radius = Number(radius)
        }
        get radius(){
            return this.changeParameterValue(this._radius)
        }
        get area(){
            return Math.PI * (this.radius  ** 2) 
        }
        toString(){
            return super.toString() + ` Area: ${this.area} - radius: ${this.radius}`
        }
    }
    class Rectangle extends Figure{
        constructor(width, height, units){
            super()
            this._width = Number(width);
            this._height = Number(height)
            this.units = units
        }
        get width(){
            return this.changeParameterValue(this._width)
        }
        get height(){
            return this.changeParameterValue(this._height)
        }
        get area(){
            return this.width * this.height
        }
        toString(){
            return super.toString() + ` Area: ${this.area} - width: ${this.width}, height: ${this.height}`
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }

}


let classes = createFigure();
let Figure = classes.Figure;
let Rectangle = classes.Rectangle;
let Circle = classes.Circle;

let c = new Circle(5);
console.log(c.area)//,78.53981633974483, "1");
console.log(c.toString())//,"Figures units: cm Area: 78.53981633974483 - radius: 5","2"); 
let r = new Rectangle(3, 4, 'mm');
console.log(r.area)//,1200,"3");
console.log(r.toString())//,"Figures units: mm Area: 1200 - width: 30, height: 40", "4");
r.changeUnits('cm');
console.log(r.area)//,12,"5");
console.log(r.toString())//"Figures units: cm Area: 12 - width: 3, height: 4","5");

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50










// let classes = createFigure()

// let Circle = classes.Circle
// let Rectangle = classes.Rectangle

// let c = new Circle(5);
// console.log(c.area); // 78.53981633974483
// console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

// let r = new Rectangle(3, 4, 'mm');
// console.log(r.area); // 1200 
// console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

// r.changeUnits('cm');
// console.log(r.area); // 12
// console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

// c.changeUnits('mm');
// console.log(c.area); // 7853.981633974483
// console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50
