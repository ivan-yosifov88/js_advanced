class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    };
    addArticle(articleModel, articleName, quantity) {
        let currentArticleModel = articleModel.toLowerCase();
        if (this._isValidArticle(articleModel, currentArticleModel)) {
            articleModel = articleModel.toLowerCase();
            this._addCurrentArticle(articleModel, articleName, quantity);
            return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
        }
        throw new Error("This article model is not included in this gallery!");
    }
    _isValidArticle(articleModel, currentArticleModel) {
        return Object.keys(this.possibleArticles).includes(currentArticleModel) &&
         (currentArticleModel.toUpperCase() == articleModel ||
          currentArticleModel[0].toUpperCase() + currentArticleModel.slice(1) == articleModel ||
           currentArticleModel == articleModel)
    };
    _addCurrentArticle(articleModel, articleName, quantity) {
        for (let index = 0; index < this.listOfArticles.length; index++) {
            if (this.listOfArticles[index].articleName == articleName) {
                this.listOfArticles[index].quantity += quantity;
                return;
            }
        }
        this.listOfArticles.push({
            articleName,
            articleModel,
            quantity,
        });
        return;
    };
    inviteGuest(guestName, personality) {
        if (this._isGestNameInGuestList(guestName)){
            throw new Error(`${guestName} has already been invited.`) 
        }
        this._addGuestToGuestList(guestName, personality)
        return `You have successfully invited ${guestName}!`
    }
    _isGestNameInGuestList(guest){
        if (this._getGuestObject(guest) != undefined){
        // for (let currentGuest of this.guests){
        //     if (currentGuest.guestName == guest){
        //         return true
        //     }
            return true
        }
        return false
    };
    _addGuestToGuestList(guestName, personality){
        const specialGuest = {
            "Vip": 500,
            "Middle":250,
        }
        const ordinaryGuestPoint = 50;
        let points = ordinaryGuestPoint
        if (specialGuest[personality] != undefined){
            points = specialGuest[personality]
        }
        this.guests.push({
            guestName,
            points,
            purchaseArticle : 0,
        });
    };
    buyArticle ( articleModel, articleName, guestName){
        if (this._isArticleNameInListOfArticles(articleName) == false || this._isArticleModelMatches(articleName, articleModel)){
            throw new Error("This article is not found.")
        };
        if (this._isArticleAvailable(articleName) == false){
            return `The ${articleName} is not available.`
        };
        if (this._isGestNameInGuestList(guestName) == false){
            return "This guest is not invited."
        };
        let currentGuest = this._getGuestObject(guestName);
        let currentArticle= this._getArticleObject(articleName);
        if (this._isPointsEnoughByArticle(currentGuest, currentArticle) == false){
            return "You need to more points to purchase the article."
        };
        this._makeTheDeal(currentGuest, currentArticle)
        let articlePoint = this.possibleArticles[currentArticle.articleModel]
        return `${guestName} successfully purchased the article worth ${articlePoint} points.`

    };
    showGalleryInfo (criteria){
        if (criteria == 'article'){
            return this._getArticleInfo()
        }else if (criteria == 'guest'){
            return this._getGuestInfo()
        }
    };
    _getGuestInfo(){
        let guestInfo = ['Guests information:'];
        for (let line of this.guests){
            guestInfo.push(`${line.guestName} - ${line.purchaseArticle}`)
        }
        return guestInfo.join('\n')
    };
    _getArticleInfo(){
        let articleInfo = ['Articles information:',]
        for (let line of this.listOfArticles){
            articleInfo.push(`${line.articleModel} - ${line.articleName} - ${line.quantity}`)
        };
        return articleInfo.join('\n')
    };
    _isArticleModelMatches(article, model){
        let currentArticle = this._getArticleObject(article);
        return currentArticle.articleModel != model;
    };
    _makeTheDeal(guest, article){
        guest.points -= this.possibleArticles[article.articleModel];
        guest.purchaseArticle ++;
        article.quantity --;
    };
    _isPointsEnoughByArticle(guest, article){
        return guest.points >= this.possibleArticles[article.articleModel]
    };
    _isArticleAvailable(article){
        let currentArticleQuantity = this._getArticleObject(article).quantity
        if (currentArticleQuantity == 0){
            return false
        }else{
            return true
        }

    };
    _isArticleNameInListOfArticles(article){
        for (let name of this.listOfArticles){
            if (name.articleName == article){
                return true
            }
        }
        return false
    };
    _getArticleObject(article){
        for (let currentArticle of this.listOfArticles){
            if(currentArticle.articleName == article){
                return currentArticle
            }
        }
    };
    _getGuestObject(guest){
        for (let currentGuest of this.guests){
            if (currentGuest.guestName == guest){
                return currentGuest
            }
        }
    }
}

const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));
console.log('\n')
const artGallery2 = new ArtGallery('Curtis Mayfield');
console.log(artGallery2.inviteGuest('John', 'Vip'));
console.log(artGallery2.inviteGuest('Peter', 'Middle'));
console.log(artGallery2.inviteGuest('John', 'Middle'));
console.log('\n')
const artGallery3 = new ArtGallery('Curtis Mayfield');
artGallery3.addArticle('picture', 'Mona Liza', 3);
artGallery3.addArticle('Item', 'Ancient vase', 2);
artGallery3.addArticle('picture', 'Mona Liza', 1);
artGallery3.inviteGuest('John', 'Vip');
artGallery3.inviteGuest('Peter', 'Middle');
console.log(artGallery3.buyArticle('picture', 'Mona Liza', 'John'));
console.log(artGallery3.buyArticle('item', 'Ancient vase', 'Peter'));
console.log(artGallery3.buyArticle('item', 'Mona Liza', 'John'));
console.log('\n')
const artGallery4 = new ArtGallery('Curtis Mayfield'); 
artGallery4.addArticle('picture', 'Mona Liza', 3);
artGallery4.addArticle('Item', 'Ancient vase', 2);
artGallery4.addArticle('picture', 'Mona Liza', 1);
artGallery4.inviteGuest('John', 'Vip');
artGallery4.inviteGuest('Peter', 'Middle');
artGallery4.buyArticle('picture', 'Mona Liza', 'John');
artGallery4.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery4.showGalleryInfo('article'));
console.log(artGallery4.showGalleryInfo('guest'));
