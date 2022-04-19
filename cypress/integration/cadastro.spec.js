/// <reference types="cypress"/>

import cadastro from '../support/pages/cadastro'

context('Cadastro', () => {
    it('Cadastrar um novo usuário', () =>{
        cadastro.acessarPaginaCadastro()
        cadastro.preencherUserName()
        cadastro.preencherEmail()
        cadastro.preencherSenha()
        cadastro.clicarBotaoSignUp()
        cadastro.verificarSeUsuarioFoiCriadoComSucesso()
    })
})