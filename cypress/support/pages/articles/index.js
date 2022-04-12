/// <reference types="cypress"/>

let Chance = require('chance')
let chance = new Chance()

const elements = require('./elements').ELEMENTS

import routes from '../../routes'

class Articles{

   acessarFormularioDeNovaPublicacao(){
    cy.get(elements.linkNewArticle).click()
   }

    preencherFormulario(){
    cy.get(elements.inputTitle).type('Rafael ' + chance.first())
    cy.get(elements.inputDescription).type('Cypress')
    cy.get(elements.textAreaBody).type(chance.paragraph())
    cy.get(elements.inputTags).type('Cypress')
    }

    submeterArtigo(){
        cy.get(elements.buttonSubmit).click()
    }

    verificarSeArtigoFoiCriadoComSucesso(){
        
        cy.wait(`@${routes.as.postArticles}`).then((postArticlesResponse)=> {
            expect(postArticlesResponse.status).to.eq(200)
        })
        cy.wait(`@${routes.as.getArticlesTitles}`).then((getArticlesTitles)=> {
            expect(getArticlesTitles.status).to.eq(200)
        })
        cy.wait(`@${routes.as.getArticlesTitleComments}`).then((getArticlesTitlesComments)=> {
            expect(getArticlesTitlesComments.status).to.eq(200)
        })
    }
}

export default new Articles()