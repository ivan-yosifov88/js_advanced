(function stringExtension() {
    String.prototype.ensureStart = function (stringParameter) {
        if (this.startsWith(stringParameter, 0) == false) {
            return stringParameter + this;
        }
        return this.toString();
    };
    String.prototype.ensureEnd = function (stringParameter) {
        let indexStartFrom = this.length - stringParameter.length;
        if (this.startsWith(stringParameter, indexStartFrom) == false) {
            return this + stringParameter;
        }
        return this.toString();
    };
    String.prototype.isEmpty = function () {
        if (this.length > 0) {
            return false;
        }
        return true;
    };
    String.prototype.truncate = function (n) {
        if (this.length <= n) {
            return this.toString();
        }

        let splittedString = this.split(' ');
        const newStringLength = n - 3;
        if (splittedString.length > 1) {
            splittedString.pop()
            while(splittedString.join(' ').length + 3 > n){
                splittedString.pop()
            }
    
            return splittedString.join(' ') + '...'
        }
        let convertedToStringSplittedString = splittedString[0];
        if (convertedToStringSplittedString.length >= newStringLength && newStringLength > 0) {
            let resultNewString = convertedToStringSplittedString.slice(0, newStringLength);
            
            return resultNewString + '...';
        } else {
            return '.'.repeat(n);
        }

    };
    String.format = function (string, ...params) {
        let regexMachPattern = /{(\d+)}/g;
        let replacedString = string.replace(regexMachPattern, function (match, group1){
            let index = Number(group1)
            if (params[index] != undefined){
                return params[index]
            }
            return match

        })
        return replacedString;

    };
})()










let str = 'my string';
str = str.ensureStart('my');
console.log(str);
str = str.ensureStart('hello ');
console.log(str);
// str = str.ensureEnd(' is not');
// console.log(str);
// console.log(str.isEmpty());
// let emptyString = '';
// console.log(emptyString.isEmpty());
str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str)
// str = String.format('The {0} {1} fox',
//   'quick', 'brown');
//   console.log(str)
// str = String.format('jumps {0} {1}',
//   'dog');
// console.log(str)
