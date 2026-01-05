# 12-nest-clean

Aplicação exemplo em NestJS que implementa um pequeno domínio de fórum (conta, autenticação, perguntas). Projetada para estudo e testes E2E com Prisma + PostgreSQL, suporte a Docker e variáveis de ambiente validadas por Zod.

## Recursos principais

- Cadastro de conta e autenticação (JWT)
- Criação e listagem de perguntas
- Validação de variáveis de ambiente via [`envSchema`](src/infra/env/env.ts) ([arquivo](src/infra/env/env.ts))
- Testes E2E com NestJS + Supertest (ex.: [create-account.controller.e2e-spec.ts](src/infra/http/controllers/create-account.controller.e2e-spec.ts))

## Estrutura relevante

- Ponto de entrada Nest: [`src/infra/main.ts`](src/infra/main.ts)
- Módulo principal: [`AppModule`](src/infra/app.module.ts)
- Módulo HTTP: [`HttpModule`](src/infra/http/http.module.ts)
- Serviço de ambiente: [`EnvService`](src/infra/env/env.service.ts)
- Cliente de testes/requests: [client.http](client.http)
- Configuração Docker: [docker-compose.yml](docker-compose.yml)
- Prisma schema: [prisma/schema.prisma](prisma/schema.prisma)
- Scripts e dependências: [package.json](package.json)

## Pré-requisitos

- Node.js (v18+ recomendado)
- npm
- Docker (opcional, recomendado para Postgres isolado)
- Banco de dados PostgreSQL (se não for usar Docker)

## Quickstart (local)

1. Instalar dependências:
   npm install

2. Copiar variáveis de ambiente:
   cp .env.example .env
   Ajuste as variáveis (ex.: DATABASE_URL, JWT_PRIVATE_KEY, JWT_PUBLIC_KEY).

   Observação: as variáveis validadas estão em [`src/infra/env/env.ts`](src/infra/env/env.ts).

3. Rodar migrações Prisma:
   npx prisma migrate dev

4. Executar em modo dev:
   npm run start:dev

5. Testes E2E:
   npm run test:e2e

## Executando com Docker Compose

1. Subir containers (API + Postgres):
   docker compose up --build

2. Parar:
   docker compose down

Veja [docker-compose.yml](docker-compose.yml) para portas e volumes.

## Testes

- Unit + E2E com Vitest/Jest conforme scripts em [package.json](package.json).
- Exemplo de teste E2E: [authenticate.controller.e2e-spec.ts](src/infra/http/controllers/authenticate.controller.e2e-spec.ts)

## Uso rápido

- Coleções/requests de exemplo: [client.http](client.http)
- Porta padrão de execução: 3333 (configurável via variável `PORT`)

## Contribuição

- Abra issues e PRs. Mantenha commits pequenos e testes quando necessário.

## Links úteis no projeto

- Entrypoint: [`src/infra/main.ts`](src/infra/main.ts)
- Módulo principal: [`src/infra/app.module.ts`](src/infra/app.module.ts)
- Config env: [`src/infra/env/env.ts`](src/infra/env/env.ts)
- HTTP module: [`src/infra/http/http.module.ts`](src/infra/http/http.module.ts)
- Requests de exemplo: [client.http](client.http)
- Docker compose: [docker-compose.yml](docker-compose.yml)
- Prisma schema: [prisma/schema.prisma](prisma/schema.prisma)
