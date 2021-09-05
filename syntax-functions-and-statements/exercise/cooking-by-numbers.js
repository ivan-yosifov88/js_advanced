function getCookingOperationValue(){
    let number = Number(arguments[0])
    for (let index = 1; index < arguments.length; index ++){
        let operation = arguments[index]
        switch (operation) {
            case 'chop':
                number /= 2
                break;
            case 'dice':
                number = Math.sqrt(number)
                break;
            case 'spice':
                number ++
                break;
            case 'bake':
                number *= 3
                break;
            case 'fillet':
                number *= 0.8
                break;
        
        }
        console.log(number)
    }
}
// getCookingOperationValue('32', 'chop', 'chop', 'chop', 'chop', 'chop')
getCookingOperationValue('9', 'dice', 'spice', 'chop', 'bake', 'fillet')