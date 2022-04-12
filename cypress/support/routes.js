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
        cy.route('POST', '**/api/articles/Rafael**/comments').as(this.as.getArticlesTitleComments)
    }
}

export default new Routes()