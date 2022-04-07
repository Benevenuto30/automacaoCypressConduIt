/// <reference types="cypress"/>

import login from '../support/pages/login'

context('Login',{browser: '!firefox'}, () => {
    it('Realizar login no site', () => {
        login.acessarPaginaLogin()
        login.preencherEmail()
        login.preencherSenha()
        login.clicarBotaoLogin()
    });
});