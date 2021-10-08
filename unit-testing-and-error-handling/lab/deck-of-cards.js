function createDeckOfCards(arrayOfStrings){
    result = []
    for (let card of arrayOfStrings){
        let face = card.slice(0, -1);
        let suit = card.slice(-1)
        try{
            let newCard = createCards(face, suit)
            result.push(newCard.toString())
        }catch(ex){
            console.log(`Invalid card: ${card}`)
            return
        }
    }   


    function createCards(face, suit) {
        const validCardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validSuits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663',
        }
        if (validCardFaces.includes(face) == false) {
            throw new Error
        }
        if (validSuits[suit] == undefined) {
            throw new Error
        }
        return {
            toString() {
                return `${face}${validSuits[suit]}`
            }
        }
    }
    console.log(result.join(' '))
}

createDeckOfCards(['AS', '10D', 'KH', '2C'])

createDeckOfCards(['5S', '3D', 'QD', '1C'])