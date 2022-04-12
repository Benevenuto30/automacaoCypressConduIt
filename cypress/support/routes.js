class Routes{

    as = {
        postArticles: 'POSTArticles',
        getArticlesTitles: 'GETArticlesTitle',
        getArticlesTitleComments:'GETArticlesTitleComments'
    }

    init(){
        cy.server()
        cy.route('POST', '**/api/articles').as(this.as.postArticles)
        cy.route('GET', '**/api/articles/Rafael**').as(this.as.getArticlesTitles)
    }
}

export default new Routes()