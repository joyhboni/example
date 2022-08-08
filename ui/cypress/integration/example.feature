@example

Feature: First Joyce feature

    
    Scenario: login sem conta cadastrada
     Given acessar a pagina serverest
     When inserir e-mail
     And inserir senha
     And clicar em Entrar
     Then erro no usuario e senha

    Scenario: Cadastro
     Given acessar a pagina serverest
     And ir em cadastrar
     When digitar um nome
     And digitar um email
     And digitar uma senha
     And clicar em cadastrar
     Then cadastro realizado
    
    Scenario: Cadastro como administrador
     Given acessar a pagina serverest
     And ir em cadastrar
     When digitar nome
     And digitar email
     And digitar senha
     And clicar em cadastrar
     And cadastrar como administrador
     Then cadastro realizado

    Scenario: E-mail ja cadastrado
     Given acessar a pagina serverest
     And ir em cadastrar
     When digitar um nome
     And digitar um email
     And digitar uma senha
     And clicar em cadastrar
     Then email ja cadastrado

    Scenario: Conta ja existente
     Given acessar a pagina serverest
     When inserir e-mail
     And inserir senha
     And clicar em Entrar
     Then validacao de login realizado
     And logout

    Scenario: Login com senha incorreta
     Given acessar a pagina serverest
     When inserir e-mail
     And clicar em Entrar
     Then erro de password
  
    Scenario: Login com e-mail em branco
     Given acessar a pagina serverest
     When inserir uma senha
     And clicar em Entrar
     Then erro de email em branco