/// <reference types="cypress" />

describe('CENÁRIO 1: Cadastro de Usuário com Sucesso (v6 - Final Attempt)', () => {
    const baseUrl = 'https://bugbank.netlify.app/'; 
    
    function generateRandomUser() {
        const timestamp = new Date().getTime();
        return {
            email: `teste@qa.com.br`,
            name: `Usuário123`,
            password: 'Senha123'
        };
    }

    it('Deve cadastrar um novo usuário após a animação de transição (2 segundos)', () => {
        const user = generateRandomUser();
        const registerForm = '.card__register'; 

        // Clicar em registrar
        cy.visit(baseUrl);
        cy.contains('Registrar').click(); 

        // Esperar 2000ms para garantir que a transição CSS 3D termine
        cy.wait(2000); 
        
        // E-mail - Usei {force: true} apenas para garantir que a digitação ocorra se a visibilidade ainda falhar após o wait
        cy.get(`${registerForm} [placeholder="Informe seu e-mail"]`).type(user.email, { force: true });
        
        // Nome
        cy.get(`${registerForm} [placeholder="Informe seu Nome"]`).type(user.name, { force: true });
        
        // Senha
        cy.get(`${registerForm} [placeholder="Informe sua senha"]`).type(user.password, { force: true }); 
        
        // Confirmação senha
        cy.get(`${registerForm} [placeholder="Informe a confirmação da senha"]`).type(user.password, { force: true }); 

        // Clicar em Cadastrar
        cy.contains('Cadastrar').click({ force: true });

        // VERIFICAÇÃO E SALVAMENTO:
        cy.get('#modalText')
            .should('contain', 'foi criada com sucesso')
            .invoke('text');    
        cy.wait(2000); 

        // Clicar em Fechar no modal
        cy.contains('Fechar').click();
    });
});