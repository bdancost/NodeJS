# API Exemplo (Docker)

Pequena API Node.js em TypeScript preparada para rodar localmente e via Docker.

## Descrição

Projeto de exemplo que expõe uma API na porta 3333 e usa PostgreSQL como banco de dados (container separado). Ideal para desenvolvimento local com hot-reload e para execução via Docker Compose.

## Requisitos

- Node.js (recomendado: versão compatível com a imagem Docker configurada)
- npm ou yarn
- Docker e Docker Compose (para execução em container)

## Instalação (local)

1. Instale dependências:

```sh
npm install
```

## Execução em desenvolvimento (hot-reload)

```sh
npm run dev
```

Por padrão o servidor roda em `http://localhost:3333`.

## Build e execução em produção (local)

1. Compilar TypeScript:

```sh
npm run build
```

2. Iniciar aplicação compilada:

```sh
npm start
```

## Com Docker (recomendado)

Subir containers (api + postgres) com Docker Compose:

```sh
docker compose up --build
```

- API mapeada: host `3333` → container `3333`
- PostgreSQL mapeado: host `5435` → container `5432`

Credenciais definidas em `docker-compose.yml`:

- POSTGRES_USER: `postgres`
- POSTGRES_PASSWORD: `postgres`
- POSTGRES_DB: `api`

O volume `database` persiste os dados do PostgreSQL.

Para rodar em segundo plano:

```sh
docker compose up --build -d
```

Parar e remover containers:

```sh
docker compose down
```

## Teste rápido

Exemplo de requisição:

```sh
curl http://localhost:3333
```

(Substitua a rota conforme as rotas implementadas em `src/`.)

## Scripts úteis (package.json)

- `dev` — modo desenvolvimento (hot-reload)
- `build` — compilar TypeScript
- `start` — iniciar aplicação compilada

Verifique o `package.json` para os nomes exatos dos scripts.

## Estrutura do projeto

- Dockerfile
- docker-compose.yml
- src/ — código fonte TypeScript
- tsconfig.json
- package.json
- .dockerignore / .gitignore
- README.md

## Observações

- A saída do build TypeScript normalmente fica em `dist/` (ver `tsconfig.json`).
- Se alterar dependências, reconstrua a imagem Docker (`docker compose build --no-cache` se necessário).
- Dados do PostgreSQL persistem no volume `database` definido no `docker-compose.yml`.

## Contato / Suporte

Edite os arquivos em `src/` para alterar rotas ou lógica. Para dúvidas, abra uma issue no repositório (se
