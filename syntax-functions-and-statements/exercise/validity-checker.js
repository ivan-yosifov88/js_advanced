function checkValidityOfCoordinates(x1, y1, x2, y2) {
    function printMessage(x, y, referentX, referentY) {
        let status = 'is valid';
        let distance
        distance = Math.sqrt((referentX - x)**2 + (referentY - y)**2)
        if (distance !== Math.round(distance)){
            status = 'is invalid'
        }

            console.log(`{${x}, ${y}} to {${referentX}, ${referentY}} ${status}`)
    }
    printMessage(x1, y1, 0, 0)
    printMessage(x2, y2, 0, 0)
    printMessage(x1, y1, x2, y2)
}
checkValidityOfCoordinates(3, 0, 0, 4)
checkValidityOfCoordinates(2, 1, 1, 1)