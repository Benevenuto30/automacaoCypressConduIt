const elements = require('./elements').ELEMENTS

class Login{

    acessarPaginaLogin(){
        cy.visit('login')
    }

    preencherEmail(){
        cy.get(elements.inputEmail).type(Cypress.config().user.email)
    }

    preencherSenha(){
        cy.get(elements.inputPassword).type(Cypress.config().user.password)
    }

    clicarBotaoLogin(){
        cy.get(elements.buttonSubmit).click()
    }
}

export default new Login()