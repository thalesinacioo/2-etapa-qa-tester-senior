----------------------------------------------------------
-- 1. Selecionar todos os usuários com saldo maior que 1000.
----------------------------------------------------------
SELECT
    id,
    nome,
    email,
    saldo
FROM
    usuarios
WHERE
    saldo > 1000.00;


----------------------------------------------------------
-- 2. Atualizar o saldo de um usuário específico.
----------------------------------------------------------
-- Exemplo: Adiciona R$ 500.00 ao saldo do usuário 'joao.silva@exemplo.com'
UPDATE
    usuarios
SET
    saldo = saldo + 500.00
WHERE
    email = 'joao.silva@exemplo.com';


----------------------------------------------------------
-- 3. Contar quantos usuários possuem saldo igual a 0.
----------------------------------------------------------
SELECT
    COUNT(id) AS total_usuarios_saldo_zero
FROM
    usuarios
WHERE
    saldo = 0.00;