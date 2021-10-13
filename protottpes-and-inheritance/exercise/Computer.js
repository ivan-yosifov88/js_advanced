function computerDevice(){
    class Manufactures{
        constructor(manufacturer){
            if (this.constructor == Manufactures){
                throw Error('Cannot instantiated abstract class')
            }
            this.manufacturer = manufacturer
        };
    };
    class Keyboard extends Manufactures{
        constructor(manufacturer, responseTime){
            super(manufacturer);
            this.responseTime = responseTime;
        };
    };
    class Monitor extends Manufactures{
        constructor(manufacturer, width, height){
            super(manufacturer);
            this.width = width;
            this.height = height;
        };
    };
    class Battery extends Manufactures{
        constructor(manufacturer, expectedLife){
            super(manufacturer);
            this.expectedLife = expectedLife;
        };
    };
    class Computer extends Manufactures{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace){
            super(manufacturer);
            if (this.constructor == Computer){
                throw Error('Cannot instantiated abstract class')
            }
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace
        };
    };
    class Laptop extends Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery){
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        };
        get battery(){
            return this._battery;
        }
        set battery(value){
            if (value.constructor != Battery){
                throw TypeError("Object is not an instance of Battery");
            }
            this._battery = value;
        };
    };
    class Desktop extends Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor){
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        };
        get keyboard(){
            return this._keyboard
        };
        set keyboard(value){
            if (value instanceof Keyboard == false){
                throw TypeError("Object is not an instance of Keyboard");
            }
            this._keyboard = value;
        };
        get monitor(){
            return this._monitor
        };
        set monitor(value){
            if (value instanceof Monitor == false){
                throw TypeError("Object is not an instance of Monitor");
            }
            this._monitor = value;
        };

    };
    return {
        Keyboard,
        Monitor,
        Battery,
        Computer,
        Laptop,
        Desktop
    }
}


// let classes = computerDevice();
// let Computer = classes.Computer;
// let Laptop = classes.Laptop;
// let Desktop = classes.Desktop;
// let Monitor = classes.Monitor;
// let Battery = classes.Battery;
// let Keyboard = classes.Keyboard;

// let battery = new Battery('Energy', 3);
// console.log(battery);
// let laptop = new Laptop("Hewlett Packard", 2.4, 4, 0.5, 3.12, "Silver", battery);
// console.log(laptop);

let classes = computerDevice();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let keyboard = new Keyboard('Logitech',70);
let monitor = new Monitor('Benq',28,18);
let desktop = new Desktop("JAR Computers",3.3,8,1,keyboard,monitor);
console.log(desktop.manufacturer)//.to.equal("JAR Computers",'Expected manufacturer did not match.');
console.log(desktop.processorSpeed)//.to.be.closeTo(3.3,0.01,'Expected processor speed did not match.');
console.log(desktop.ram)//.to.equal(8,'Expected RAM did not match.');
console.log(desktop.hardDiskSpace)//.to.equal(1,'Expected hard disk space did not match.');
console.log(desktop.keyboard)//.to.equal(keyboard,'Expected keyboard did not match.');
console.log(desktop.monitor)//.)//to.equal(monitor,'Expected monitor did not match.');