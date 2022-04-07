// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
Cypress.Commands.add('backgroundLogin', () => {
      //PROCESSO DE LOGIN EM BACKGROUND
        //1 - Realizar uma requisição POST com email e senha
        cy.request({
            method: 'POST',
            url:  `${Cypress.config().apiUrl}users/login`,
            body: {
               user:{
                email:'uhved@mata.do',
                password: '12345678'
               }
            }
        }).then((loginResponse)=>{
            console.log(loginResponse.body)
        //2 - Capturar o token que é recebido na nossa requisição
            cy.log(loginResponse.body.user.token)
        //3 - Usar o token recebido para salvar no localstorage
            cy.visit('/', {
                onBeforeLoad: (win)=> {
                    win.localStorage.setItem('jwtToken', loginResponse.body.user.token)
                }
            })
        })
})