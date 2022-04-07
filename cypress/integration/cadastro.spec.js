/// <reference types="cypress"/>

let Chance = require('chance')
let chance = new Chance()

context('Cadastro', () => {
    it('Cadastrar um novo usuário', () =>{
        cy.visit('register')
        cy.get('input[ng-model*=username]').type(chance.first() + chance.last())
        cy.get('input[ng-model*=email]').type(chance.email())
        cy.get('input[ng-model*=password]').type('12345678')
        cy.get('button.btn-primary').click()

    })
});