function getArticleGenerator(articles) {
    let articlesCount = articles.length
    let indexOfArticle = 0
    const divElement = document.querySelector('#content')
    function generator(){
        if (indexOfArticle < articlesCount){
            const articleElement = document.createElement('article');
            articleElement.textContent = articles[indexOfArticle]
            divElement.appendChild(articleElement)
            indexOfArticle ++
        }
    }
    return generator
}
