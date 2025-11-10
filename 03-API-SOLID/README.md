# API SOLID — Gympass Style App

API desenvolvida em Node.js com arquitetura SOLID, modelando um sistema no estilo Gympass, onde usuários podem se registrar, autenticar, buscar academias próximas, realizar check-ins e consultar seu histórico, métricas e perfil.

---

## Tecnologias

![Node](https://img.shields.io/badge/Node.js-18.x-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Fastify](https://img.shields.io/badge/Fastify-API-purple)
![Prisma](https://img.shields.io/badge/Prisma-ORM-black)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-DB-blue)
![JWT](https://img.shields.io/badge/JWT-Auth-yellow)
![Vitest](https://img.shields.io/badge/Tests-Vitest-yellow)

---

## Arquitetura / Domínios

| layer                   | função                                                        |
| ----------------------- | ------------------------------------------------------------- |
| `/http/controllers`     | Entrada do HTTP (Fastify)                                     |
| `/use-cases`            | regras de negócio (casos de uso)                              |
| `/repositories`         | contrato de persistência (interfaces + implementações Prisma) |
| `/lib/prisma.ts`        | client ORM com conexão PostgreSQL                             |
| `/prisma/schema.prisma` | modelagem do banco                                            |
| `/env`                  | variáveis de ambiente                                         |
| `/utils`                | funções utilitárias (ex: cálculo de distância GPS)            |

**Fluxo de execução:**
Request HTTP → **Controller** → **Use Case** (regra) → **Repository** (abstração) → **Prisma** (DB real) → Response JSON

---

## Requisitos Funcionais (RFs)

- Deve ser possível se cadastrar
- Deve ser possível se autenticar
- Deve ser possível obter o perfil do usuário logado
- Deve ser possível obter número de check-ins do usuário logado
- Deve ser possível buscar academias próximas (≤ 10km)
- Deve ser possível buscar academias por nome
- Deve ser possível realizar check-in
- Deve ser possível validar check-in
- Deve ser possível cadastrar academia

---

## Regras de Negócio (RNs)

- Não pode cadastrar com email duplicado
- Não pode fazer mais de 1 check-in no mesmo dia
- Só pode check-in se estiver perto (≤ 100m)
- Check-in só pode ser validado até 20min após criado
- [ ] Apenas admins podem validar check-in
- [ ] Apenas admins podem cadastrar academias

---

## Requisitos Não-Funcionais (RNFs)

- Senha precisa estar criptografada
- Dados persistidos em PostgreSQL
- Listagens devem ser paginadas com 20 itens/página
- [ ] Usuário deve ser identificado por JWT

---

## Como rodar local

**1) configure variáveis ambiente**

crie `.env` baseado no `.env.example` e aponte para seu banco PostgreSQL

**2) instale dependências**

```bash
npm install

**3) execute migrações**

npx prisma migrate dev

**4) execute o server**

npm run dev


## Testes

npm run test

# Passo-a-passo da lógica utilizada

Controller recebe request (Fastify)

Controller chama use-case

Use Case aplica regra de negócio (ex: verifica distância)

Use Case chama repositório

Repositório chama Prisma

Prisma executa SQL no PostgreSQL

Retorna DTO padronizado ao cliente

Com isso o código fica limpo, isolado e fácil de manter.




```
