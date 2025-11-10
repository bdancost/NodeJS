# API REST de Transações Financeiras

API para estudo e prática de backend com Node.js e TypeScript, implementando criação, listagem e resumo de transações financeiras (entradas e saídas), com persistência em SQLite.

---

## Tecnologias

![Node](https://img.shields.io/badge/Node.js-18.x-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Fastify](https://img.shields.io/badge/Fastify-API-purple)
![Knex](https://img.shields.io/badge/Knex-QueryBuilder-orange)
![SQLite](https://img.shields.io/badge/SQLite-DB-grey)
![Vitest](https://img.shields.io/badge/Tests-Vitest-yellow)

---

## Como funciona a lógica da aplicação

Fluxo principal de funcionamento:

1. o cliente chama a API
2. se não existir cookie `session_id`, o backend cria um
3. a cada request, o middleware `check-session-id-exists` garante que há uma sessão
4. o `controller` de rotas recebe a chamada
5. o serviço chama o Knex
6. salva / lê os dados na tabela `transactions` no SQLite
7. retorna o JSON padronizado

**modelagem de negócio:**

- transação pode ser `credit` (entrada) ou `debit` (saída)
- o summary calcula: total = SOMA(credit) - SOMA(debit)

---

## Arquitetura

| pasta / arquivo    | função                                   |
| ------------------ | ---------------------------------------- |
| `/src`             | código fonte principal da aplicação      |
| `/src/routes`      | rotas HTTP (ex: transactions)            |
| `/src/middlewares` | validação de sessão / cookies            |
| `/src/env`         | variáveis de ambiente                    |
| `/db/migrations`   | scripts de criação e alteração de tabela |
| `test/*.spec.ts`   | testes automatizados com Vitest          |

---

## Como rodar localmente

```bash
npm install
npm run dev


npm run knex -- migrate:latest

npm run test


Endpoints
Método	Rota


```

| Método | Rota                    | O que faz                           |
| ------ | ----------------------- | ----------------------------------- |
| `POST` | `/transactions`         | cria uma nova transação             |
| `GET`  | `/transactions`         | lista todas transações do usuário   |
| `GET`  | `/transactions/:id`     | busca uma transação específica      |
| `GET`  | `/transactions/summary` | retorna o saldo (entradas - saídas) |
