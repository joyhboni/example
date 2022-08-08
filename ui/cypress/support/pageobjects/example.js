/// <reference types="cypress" />

import exampleElements from "../elements/example";

const ExampleElements = new exampleElements

class example{

    acessarServerest(){
        cy.visit('https://front.serverest.dev/')
        
    }

    inserirEmail(){
        cy.get(ExampleElements.campoEmail()).type("emaildeteste@teste.com")

    }

    inserirSenha(){
        cy.get(ExampleElements.campoSenha()).type("12345678")
    }

    clicarEmEntrar(){
        cy.get(ExampleElements.entrar()).click()
    }

    validacao(){
        cy.get('body').contains('Email e/ou senha inválidos')
        
    }

    // Cenário de teste 2 - Realizando cadastro

    iniciarCadastro(){
        cy.get(ExampleElements.botaoCadastro()).click()
    }
    digitarNome (){
        cy.get(ExampleElements.campoNome()).type("Usuario para Teste")
    }

    digitarEmail (){
        cy.get(ExampleElements.campoEmail()).type("emaildeteste@teste.com")
    }

    digitarSenha(){
        cy.get(ExampleElements.campoSenha()).type("12345678")
    }

    cadastrar(){
        cy.get(ExampleElements.cadastro()).click()
    }

    verificaCadastro(){
        cy.get('body').contains('Cadastro realizado')

    }

    //cenario 3 - cadastrando conta como administrador

    digitarUmNome (){
        cy.get(ExampleElements.campoNome()).type("Usuario como ADM")
    }

    digitarUmEmail (){
        cy.get(ExampleElements.campoEmail()).type("contaadmin@teste.com")
    }

    digitarUmaSenha(){
        cy.get(ExampleElements.campoSenha()).type("1234")
    }

    configAdm(){
        cy.get(ExampleElements.checkadm()).click()
    }

        
    //cenario 4 - realiza novo cadastro com e-mail ja cadastrado

    emailJaUsado(){
        cy.get('body').contains('Este email já está sendo usado')
    }

    //cenario 5 - logando com o e-mail cadastrado

    loginRealizado(){
        cy.get('body').contains('Serverest Store')
    }
    
    logout(){
        cy.get('[data-testid="logout"]').click()
    }

    //cenario 6 - login com senha em branco

    passwordErro(){
        cy.get('body').contains('Password é obrigatório')
    }

    //cenario 7 - email em branco


    emailErro(){
        cy.get('body').contains('Email é obrigatório')
    }


}
export default example