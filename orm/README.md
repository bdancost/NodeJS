# Fullstack ORM Template

Projeto de exemplo com Node.js, Express e Prisma.

- Servidor: [`src/server.ts`](src/server.ts) (inicia a API)
- Rotas: [`routes`](src/routes/index.ts) — ver [src/routes/users-routes.ts](src/routes/users-routes.ts) e [src/routes/questions-routes.ts](src/routes/questions-routes.ts)
- Controladores: [`UsersController`](src/controllers/users-controller.ts), [`QuestionsController`](src/controllers/questions-controller.ts)
- Cliente Prisma: [`prisma`](src/prisma.ts) (usa o esquema em [prisma/schema.prisma](prisma/schema.prisma))
- Seed: [prisma/seed.ts](prisma/seed.ts)
- Migrations: [prisma/migrations](prisma/migrations)
- Configuração TypeScript: [tsconfig.json](tsconfig.json)
- Scripts e dependências: [package.json](package.json)
- Variáveis de ambiente: [.env](.env)

Requisitos

- Node.js (versão compatível com ES2022)
- PostgreSQL (conectado pela variável `DATABASE_URL` em [.env](.env))

Instalação e execução

1. Instalar dependências:
   npm install

2. Configurar a conexão com o banco em [.env](.env).

3. Aplicar migrations (exemplo local):
   npx prisma migrate dev

4. Rodar seed (se desejar popular dados iniciais):
   npx prisma db seed

5. Iniciar em modo desenvolvimento:
   npm run dev
   (script definido em [package.json](package.json), usa `tsx` para rodar [`src/server.ts`](src/server.ts))

Principais endpoints

- Usuários (rotas em [src/routes/users-routes.ts](src/routes/users-routes.ts)):

  - GET /users — lista usuários
  - POST /users — cria usuário
  - GET /users/:id — busca usuário por id

- Questions (rotas em [src/routes/questions-routes.ts](src/routes/questions-routes.ts)):
  - GET /questions?title=... — busca com filtro por título
  - POST /questions — cria pergunta (campo body: user_id)
  - PUT /questions/:id — atualiza pergunta
  - DELETE /questions/:id — remove pergunta

Observações

- O cliente Prisma está exportado em [`prisma`](src/prisma.ts) e usado nos controladores.
- As migrations estão no diretório [prisma/migrations](prisma/migrations).
- Para desenvolvimento iterativo, use `npm run dev` conforme definido em [package.json](package.json).

Contribuição
Abrir issues e pull requests é bem-vindo.// filepath: /README.md

# Fullstack ORM Template

Projeto de exemplo com Node.js, Express e Prisma.

- Servidor: [`src/server.ts`](src/server.ts) (inicia a API)
- Rotas: [`routes`](src/routes/index.ts) — ver [src/routes/users-routes.ts](src/routes/users-routes.ts) e [src/routes/questions-routes.ts](src/routes/questions-routes.ts)
- Controladores: [`UsersController`](src/controllers/users-controller.ts), [`QuestionsController`](src/controllers/questions-controller.ts)
- Cliente Prisma: [`prisma`](src/prisma.ts) (usa o esquema em [prisma/schema.prisma](prisma/schema.prisma))
- Seed: [prisma/seed.ts](prisma/seed.ts)
- Migrations: [prisma/migrations](prisma/migrations)
- Configuração TypeScript: [tsconfig.json](tsconfig.json)
- Scripts e dependências: [package.json](package.json)
- Variáveis de ambiente: [.env](.env)

Requisitos

- Node.js (versão compatível com ES2022)
- PostgreSQL (conectado pela variável `DATABASE_URL` em [.env](.env))

Instalação e execução

1. Instalar dependências:
   npm install

2. Configurar a conexão com o banco em [.env](.env).

3. Aplicar migrations (exemplo local):
   npx prisma migrate dev

4. Rodar seed (se desejar popular dados iniciais):
   npx prisma db seed

5. Iniciar em modo desenvolvimento:
   npm run dev
   (script definido em [package.json](package.json), usa `tsx` para rodar [`src/server.ts`](src/server.ts))

Principais endpoints

- Usuários (rotas em [src/routes/users-routes.ts](src/routes/users-routes.ts)):

  - GET /users — lista usuários
  - POST /users — cria usuário
  - GET /users/:id — busca usuário por id

- Questions (rotas em [src/routes/questions-routes.ts](src/routes/questions-routes.ts)):
  - GET /questions?title=... — busca com filtro por título
  - POST /questions — cria pergunta (campo body: user_id)
  - PUT /questions/:id — atualiza pergunta
  - DELETE /questions/:id — remove pergunta

Observações

- O cliente Prisma está exportado em [`prisma`](src/prisma.ts) e usado nos controladores.
- As migrations estão no diretório [prisma/migrations](prisma/migrations).
- Para desenvolvimento iterativo, use `npm run dev` conforme definido em [package.json](package.json).

Contribuição
Abrir issues e pull requests é bem
