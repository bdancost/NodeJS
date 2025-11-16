# Fullstack ORM Template

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Express.js](https://img.shields.io/badge/Express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB)](#)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white)](#)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-31648f?style=flat&logo=postgresql&logoColor=white)](https://www.postgresql.org/)

Descrição
Aplicação de exemplo profissional que demonstra uma API REST minimalista com TypeScript + Express e Prisma ORM conectada a PostgreSQL. Ideal como template para projetos que precisam de uma arquitetura clara e boas práticas ao interagir com a camada de dados.

Por que usar este template

- Estrutura simples e escalável: rotas → controladores → cliente Prisma.
- Tipagem forte com TypeScript em toda a stack.
- Exemplos reais de operações CRUD, filtros e ordenação.
- Configuração pronta para migrations e seed com Prisma.

Arquitetura & lógica (resumido)

- Rotas delegam responsabilidade aos controllers.
- Controllers validam/transformam entrada e chamam o Prisma Client.
- Prisma gerencia modelos e migrations (User 1:N Question).
- Exemplos:
  - GET /questions?title=termo — filtro por título (case-insensitive) e ordenação por createdAt desc.
  - POST /users — cria usuário e retorna 201.
  - GET /users/:id — busca por id.

Como rodar (rápido)

1. npm install
2. Copie .env.example → .env e configure DATABASE_URL
3. npx prisma migrate dev
4. (opcional) npx prisma db seed
5. npm run dev

Estrutura importante

- src/server.ts — inicializa server
- src/prisma.ts — exporta prisma client
- prisma/schema.prisma — models
- src/controllers/\* — lógica de negócio
- src/routes/\* — endpoints

Boas práticas

- Validar entradas antes de persistir.
- Tratar erros do Prisma (unique, foreign keys).
- Configurar pool e variáveis para produção.

Contribuição
Pull requests e issues são bem-vindos. Mantenha PRs pequenos, com descrição e testes quando aplicável.

```// filepath: /Users/danielfernandes/Documents/Estudos/javascript/Node/NodeJS/orm/README.md


```
