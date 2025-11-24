# 🏆 Avaliação Técnica QA Tester Sênior

Este repositório contém os artefatos, cenários e códigos desenvolvidos para a Avaliação Técnica de QA Tester Sênior, cobrindo Testes Funcionais, Automação (Cypress), Testes de API (Postman) e Fundamentos Teóricos/SQL.

O foco principal dos testes foi o sistema bancário simulado **BugBank** (`https://bugbank.netlify.app/`).

---

## 🧭 Estrutura do Repositório

O projeto está organizado em pastas que correspondem às etapas da avaliação:

| Pasta / Arquivo | Conteúdo Principal | Entregável da Etapa |
| :--- | :--- | :--- |
| `01_testes_funcionais/` | Cenários, resultados e o Relatório Simples. | Relatório (Markdown) |
| `02_automacao_cypress/`| Código fonte completo da suíte de testes E2E. | Código Fonte |
| `03_testes_api_postman/` | Export da Coleção Postman e documentação de API. | Coleção JSON + Documentação |
| `04_documentacao_e_sql/`| Documentos teóricos sobre Tipos de Teste e consultas SQL. | Documentos |

---

## 1. Testes Funcionais/Exploratórios (BugBank)

Nesta etapa, foram realizados testes exploratórios nos fluxos de Criação de Conta, Login e Transferência, resultando na identificação de um **bug crítico**.

| Cenário | Status | Resultado |
| :--- | :--- | :--- |
| 001 - Criação de conta com sucesso | ✅ PASS | Conta criada com sucesso. |
| **002 - E-mail já registrado** | ❌ **FAIL (Bug)** | O sistema permitiu a criação de contas duplicadas com o mesmo e-mail. |
| 005 - Transferência com saldo | ✅ PASS | Transferência realizada com sucesso. |
| 006 - Transferência saldo insuficiente | ✅ PASS | Sistema bloqueou corretamente a transação. |

### 📂 Arquivos Chave:
* **Relatório:** `01_testes_funcionais/relatorio_simples_bugbank.md`
* **Relatório de Bug:** `01_testes_funcionais/bug_report_email_duplicado.md` (Detalha a falha na unicidade do e-mail).

---

## 2. Automação com Cypress

O projeto de automação foi configurado com Cypress e focado na estabilidade, usando correções avançadas (`cy.wait()` e `{force: true}`) para lidar com as transições 3D complexas da UI do BugBank.

### ⚙️ Execução e Localização dos Testes:
1. Navegue até a pasta: `02_automacao_cypress/`
2. Instale as dependências: `npm install`
3. Execute o Cypress: `npx cypress open`

### 💻 Cenários Automatizados:

| Arquivo | Cenário | Abordagem |
| :--- | :--- | :--- |
| `cadastro.cy.js` | Cadastro | Testa o fluxo de cadastro |
| `login_sucesso.cy.js` | Login | Testa o fluxo E2E, de login, até chegar na tela da conta do usuário |
| `login_invalido.cy.js` | Tentativa de Login (Credenciais Inválidas) | Testa o cenário negativo e a exibição da mensagem de erro. |

---

## 3. Testes de API com Postman

Foi utilizada a Fake Store API para cobrir os métodos HTTP necessários e validar a integridade das respostas.

### 📝 Documentação e Coleção:
* **Export da Coleção:** `03_testes_api_postman/Suite master.postman_collection.json`
* **Documentação dos Testes:** `03_testes_api_postman/documentacao_api.md` (Explica a cobertura de GET, POST, PUT, DELETE e validações de Body/Headers).

### 🛠️ Cobertura de Métodos:
A coleção valida os métodos **GET, POST, PUT e DELETE**, incluindo validações detalhadas de Status Code, Body Schema e Validação de Headers.

---

## 4. Tipos de Testes e Consultas SQL

### 📚 Fundamentos Teóricos
* **Documento:** `04_documentacao_e_sql/tipos_de_teste_bugbank.md`
* **Conteúdo:** Diferença entre Teste Funcional, Regressão, Integração e Performance, com exemplos específicos no contexto BugBank.

### 💾 Consultas SQL
* **Script:** `04_documentacao_e_sql/consultas_sql.sql`
* **Conteúdo:** Contém scripts para consulta, atualização e contagem de usuários na tabela fictícia `usuarios`.

---

Agradeço a oportunidade de realizar esta avaliação técnica. Qualquer dúvida, estou à disposição!
