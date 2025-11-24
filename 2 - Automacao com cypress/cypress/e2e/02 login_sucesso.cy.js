/// <reference types="cypress" />

describe('CENÁRIO 1 & 2: Fluxo Completo - Cadastro e Login de Sucesso', () => {
    const baseUrl = 'https://bugbank.netlify.app/'; 
    
    // Dados fixos para garantir consistência no teste
    const user = {
        email: 'teste@qa.com.br', 
        name: 'Usuário Teste',
        password: 'Senha123'
    };
    
    const registerForm = '.card__register'; 
    const loginForm = '.card__login'; 

    it('Deve cadastrar o usuário e realizar o login com a conta recém-criada', () => {
        // --- 1. FLUXO DE CADASTRO ---
        cy.log('INICIANDO CADASTRO');
        cy.visit(baseUrl);
        cy.contains('Registrar').click(); 

        // Esperar 2000ms pela transição 3D (necessário para o BugBank)
        cy.wait(2000); 
        
        // E-mail, Nome, Senha, Confirmação (usando force: true)
        cy.get(`${registerForm} [placeholder="Informe seu e-mail"]`).type(user.email, { force: true });
        cy.get(`${registerForm} [placeholder="Informe seu Nome"]`).type(user.name, { force: true });
        cy.get(`${registerForm} [placeholder="Informe sua senha"]`).type(user.password, { force: true }); 
        cy.get(`${registerForm} [placeholder="Informe a confirmação da senha"]`).type(user.password, { force: true }); 


        // Clicar em Cadastrar
        cy.contains('Cadastrar').click({ force: true });

        // Verificação do Modal de Sucesso e Fechamento
        cy.get('#modalText').should('contain', 'foi criada com sucesso');
        cy.wait(1000); // Espera para garantir que o clique em fechar funcione
        cy.contains('Fechar').click();
        
        // --- 2. FLUXO DE LOGIN (Aproveitando a página) ---
        cy.log('INICIANDO LOGIN');

        // Preencher o E-mail no formulário de Login
        cy.get(`${loginForm} [placeholder="Informe seu e-mail"]`).type(user.email);
        
        // Preencher a Senha
        cy.get(`${loginForm} [placeholder="Informe sua senha"]`).type(user.password); 
        
        // Clicar em Acessar
        cy.contains('Acessar').click();

        // verificar login
        cy.log('VERIFICANDO ACESSO COM URL E BOTÃO SAIR');
        cy.url().should('include', '/home');
        
        // O botão Sair só aparece após o login bem-sucedido
        cy.contains('Sair').should('be.visible');
        
        // Verifica se se o botão está visível)
        cy.contains('TRANSFERÊNCIA').should('be.visible');
    });
});