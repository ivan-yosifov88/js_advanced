function heroesInventory(arrayOfStrings){
    const heroes = []
    for (const heroInfo of arrayOfStrings){
        let [heroName, heroLevel, heroItems] = heroInfo.split(' / ')
        let currentHero = {}
            currentHero['name'] = heroName
            currentHero['level']= Number(heroLevel)
            if (heroItems){
                currentHero['items'] = heroItems.split(', ')
            }else{
                currentHero['items'] = []
            }
            heroes.push(currentHero)
    }
    return JSON.stringify(heroes)
}

console.log(heroesInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']))