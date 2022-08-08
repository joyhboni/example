/* global Given, Then, When */

import example from "../pageobjects/example";

const Example = new example

Given("acessar a pagina serverest", () => {
    Example.acessarServerest()
})

When ("inserir e-mail", () => {
    Example.inserirEmail()
})

And ("inserir senha", () => {
    Example.inserirSenha()
})

And ("clicar em Entrar", () => {
    Example.clicarEmEntrar()
})

Then ("erro no usuario e senha", () => {
    Example.validacao()
})

//cenario 2


And("ir em cadastrar", () => {
    Example.iniciarCadastro()
})

And ("digitar um email", () => {
    Example.digitarEmail()
})

And ("digitar um nome", () => {
    Example.digitarNome()
})

And ("digitar uma senha", () => {
    Example.digitarSenha()
})

And ("clicar em cadastrar", () => {
    Example.cadastrar()
})    

Then ("cadastro realizado", () => {
    Example.verificaCadastro()
})

//cenario 3 - cadastro como adm

When ("digitar nome", () => {
    Example.digitarUmNome()
})

And ("digitar email", () => {
    Example.digitarUmEmail()
})

And ("digitar senha", () => {
    Example.digitarUmaSenha()
})

And ("cadastrar como administrador", () => {
    Example.configAdm()
})
    

//cenario 4 - email ja cadastrado

Then ("email ja cadastrado", () => {
    Example.emailJaUsado()
})

//cenario 5 - login com conta cadastrada

Then ("validacao de login realizado", () => {
    Example.loginRealizado()
})

And ("logout", () => {
    Example.logout()
})

//cenario 6 - login com senha em branco

Then ("erro de password", () => {
    Example.passwordErro()
})

//cenario 7 - email em branco

When ("inserir uma senha", () => {
    Example.digitarSenha()
})

Then ("erro de email em branco", () => {
    Example.emailErro()
})