class Routes{

    as = {
        postArticles: 'POSTArticles',
        getArticlesTitles: 'GETArticlesTitle',
        getArticlesTitleComments:'GETArticlesTitleComments',
        getTags: 'GETTags'
    }

    init(){
        cy.server()
        cy.route('POST', '**/api/articles').as(this.as.postArticles)
        cy.route('GET', '**/api/articles/Rafael**').as(this.as.getArticlesTitles)
        cy.route('GET', '**/api/tags**').as(this.as.getTags)
    }
}

export default new Routes()