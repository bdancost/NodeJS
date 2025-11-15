# API Restaurant

API simples para gerenciar produtos, mesas, sessões de mesa e pedidos de um restaurante, escrita em Node.js + TypeScript usando Express e Knex (SQLite).

Principais arquivos:

- [`package.json`](package.json)
- [`knexfile.ts`](knexfile.ts)
- [`src/server.ts`](src/server.ts)
- Rotas: [`src/routes/index.ts`](src/routes/index.ts)
- Controllers:
  - [`ProductController`](src/controllers/products-controller.ts)
  - [`TablesController`](src/controllers/tables-controller.ts)
  - [`TablesSessionsController`](src/controllers/tables-sessions-controller.ts)
  - [`OrdersController`](src/controllers/orders-controller.ts)
- Banco de dados/Knex: [`src/database/knex.ts`](src/database/knex.ts)
- Middleware de erro: [`src/middlewares/error-handling.ts`](src/middlewares/error-handling.ts)
- Tipo de erro: [`AppError`](src/utils/AppError.ts)

Requisitos

- Node.js (versão compatível com ES2022)
- npm

Instalação

1. Instalar dependências:

```sh
npm install
```

Executando em modo de desenvolvimento

```sh
npm run dev
```

O servidor inicia em http://localhost:3333 (arquivo de entrada: [`src/server.ts`](src/server.ts)).

Migrações e seeds

- Rodar migrações:

```sh
npm run knex -- migrate:latest
```

- Rodar seeds:

```sh
npm run knex -- seed:run
```

O arquivo de configuração do Knex está em [`knexfile.ts`](knexfile.ts) e o banco SQLite fica em `src/database/database.db`.

Principais endpoints
(Caminhos registrados em [`src/routes/index.ts`](src/routes/index.ts))

- Produtos (`/products`) — controlador: [`ProductController`](src/controllers/products-controller.ts)

  - GET /products?name=... — listar produtos (filtro por nome)
  - POST /products — criar produto — body: { name: string, price: number }
  - PUT /products/:id — atualizar produto — body: { name: string, price: number }
  - DELETE /products/:id — remover produto

- Mesas (`/tables`) — controlador: [`TablesController`](src/controllers/tables-controller.ts)

  - GET /tables — listar mesas

- Sessões de mesa (`/tables-sessions`) — controlador: [`TablesSessionsController`](src/controllers/tables-sessions-controller.ts)

  - GET /tables-sessions — listar sessões
  - POST /tables-sessions — abrir sessão — body: { table_id: number }
  - PATCH /tables-sessions/:id — fechar sessão

- Pedidos (`/orders`) — controlador: [`OrdersController`](src/controllers/orders-controller.ts)
  - POST /orders — criar pedido — body: { table_session_id: number, product_id: number, quantity: number }
  - GET /orders/table-session/:table_session_id — listar pedidos de uma sessão
  - GET /orders/table-session/:table_session_id/total — total e quantidade da sessão

Tratamento de erros

- Erros customizados via [`AppError`](src/utils/AppError.ts) e middleware [`src/middlewares/error-handling.ts`](src/middlewares/error-handling.ts).
- Validações via Zod nos controllers.

Estrutura de pastas

- src/
  - controllers/ — lógica das rotas
  - routes/ — definição de rotas (agregadas em [`src/routes/index.ts`](src/routes/index.ts))
  - database/ — knex, migrations, seeds e arquivo sqlite
  - middlewares/ — tratamento de erro
  - utils/ — utilitários (ex: `AppError`)

Insomnia collection

- Há uma collection de exemplo em `request_insomnia.yaml`.

Contribuição

- Abrir issue / pull request com melhorias ou correções.

```

```
