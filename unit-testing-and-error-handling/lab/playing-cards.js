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

const card = (createCards(1, 'S'))
console.log(card.toString())