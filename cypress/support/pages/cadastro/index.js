const elements = require('./elements').ELEMENTS

let Chance = require('chance')
let chance = new Chance()

import routes from '../../routes'

class Cadastro{

    acessarPaginaCadastro(){
        cy.visit('register')
    }

    preencherUserName(){
        cy.get(elements.inputUserName).type(chance.first() + chance.last())
    }

    preencherEmail(){
        cy.get(elements.inputEmail).type(chance.email())
    }

    preencherSenha(){
        cy.get(elements.inputPassword).type('12345678')
    }

    clicarBotaoSignUp(){
        cy.get(elements.buttonSubmit).click()
    }

    verificarSeUsuarioFoiCriadoComSucesso(){
        cy.wait(`@${routes.as.getTags}`).then((getTags)=> {
            expect(getTags.status).to.eq(200)
        })
        cy.contains('No articles are here... yet.')
    }
}

export default new Cadastro()