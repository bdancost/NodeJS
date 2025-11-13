# Query Builder - Projeto de Exemplo

Aplicação de exemplo usando Node.js + Express + Knex + SQLite para demonstrar migrations, seeds e operações CRUD simples.

## Estrutura principal

- knexfile.ts — configuração do Knex (SQLite)
- src/server.ts — servidor Express com rotas
- src/database/knex.ts — exporta o cliente Knex
- src/database/database.db — arquivo SQLite (gerado após rodar migrations/seeds)
- src/database/migrations — migrations do banco
- src/database/seeds — seeds de exemplo

## Pré-requisitos

- Node.js v18+ recomendado
- npm (ou pnpm/yarn)

## Instalação

```sh
npm install
```

## Scripts úteis

- Iniciar desenvolvimento (usa tsx para executar TypeScript diretamente):

```sh
npm run dev
```

- Usar o binário do Knex (o script já configura tsx para suportar arquivos .ts):

```sh
npm run knex -- <comando-do-knex>
```

Exemplo para ver a versão do Knex:

```sh
npm run knex -- --version
```

## Migrations e Seeds

Rodar todas as migrations:

```sh
npm run knex -- migrate:latest --knexfile knexfile.ts
```

Reverter a última migration:

```sh
npm run knex -- migrate:down --knexfile knexfile.ts
```

Rodar seeds:

```sh
npm run knex -- seed:run --knexfile knexfile.ts
```

Observação: o arquivo de configuração do Knex é o `knexfile.ts` na raiz e aponta para `./src/database/database.db`.

## Endpoints (exemplos)

- POST /courses

  - Cria um curso
  - Body JSON: { "name": "Nome do Curso" }

- GET /courses

  - Lista todos os cursos

- PUT /courses/:id

  - Atualiza nome do curso
  - Body JSON: { "name": "Nome Atualizado" }

- DELETE /courses/:id

  - Remove um curso

- POST /modules

  - Cria um módulo relacionado a um curso
  - Body JSON: { "name": "Nome do Módulo", "course_id": 1 }

- GET /modules

  - Lista todos os módulos

- GET /courses/:id/modules
  - Lista módulos de um curso específico

Exemplo rápido com curl:

```sh
curl -X POST http://localhost:3333/courses -H "Content-Type: application/json" -d '{"name":"TypeScript"}'
curl http://localhost:3333/courses
```

## Observações

- A configuração ativa foreign keys para SQLite (PRAGMA foreign_keys = ON) no `knexfile.ts`.
- useNullAsDefault: true está habilitado para compatibilidade com SQLite.
- Para desenvolvimento em macOS, use o terminal integrado do VS Code ou o Terminal.app; os comandos npm acima funcionam normalmente.
