function extensibleObject() { 
    let prototypeObject = {};
    let extendObject = Object.create(prototypeObject);
    extendObject.extend = function (template){
        for (let key in template){
            if (typeof template[key] == 'function'){
                let proto = Object.getPrototypeOf(this);
                proto[key] = template[key];
            }else{
                this[key] = template[key];
            }
        }
    }
    return extendObject
} 




const myObj = extensibleObject(); 
 
const template = { 
  extensionMethod: function () {}, 
  extensionProperty: 'someString' 
} 
myObj.extend(template); 
console.log(myObj)
    