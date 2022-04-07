let Chance = require('chance')
let chance = new Chance()

const elements = require('./elements').ELEMENTS

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
}

export default new Articles()