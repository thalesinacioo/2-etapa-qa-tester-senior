/// <reference types="cypress" />

describe('CENÁRIO 3: Login com Credenciais Inválidas', () => {
    const baseUrl = 'https://bugbank.netlify.app/'; 
    
    const user = {
        // E-mail intencionalmente inválido
        email: 'testea@qa.com.br', 
        password: 'Senha123'
    };

    it('Deve negar o acesso e exibir mensagem de erro ao usar credenciais incorretas', () => {
        cy.visit(baseUrl);

        const loginForm = '.card__login'; 

        // 1. Preencher o E-mail (Inválido)
        cy.get(`${loginForm} [placeholder="Informe seu e-mail"]`).type(user.email);
        
        // 2. Preencher a Senha
        cy.get(`${loginForm} [placeholder="Informe sua senha"]`).type(user.password); 
        
        // 3. Clicar em Acessar
        cy.contains('Acessar').click();

        // 4. Verificação de Falha. O sistema deve exibir a mensagem de erro.
        cy.get('#modalText')
          .and('have.text', 'Usuário ou senha inválido.\nTente novamente ou verifique suas informações!');
        
        // 5. Verificação da URL: Deve permanecer na página de login
        cy.url().should('eq', baseUrl);
    });
});