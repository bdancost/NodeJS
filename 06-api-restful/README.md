# 06-api_restful

API RESTful de exemplo em Node.js + TypeScript.

## Visão geral

Projeto simples que expõe endpoints para produtos. Validação de entrada com [zod], tratamento de erros customizado e middleware que adiciona `user_id` à requisição.

## Principais arquivos e símbolos

- [`src/server.ts`](src/server.ts) — ponto de entrada e configuração do servidor.
- [`routes`](src/routes/index.ts) — montagem das rotas.
- [`productsRoutes`](src/routes/products-routes.ts) — rotas de produtos.
- [`ProductsController.index`](src/controllers/products-controller.ts) — listagem de produtos.
- [`ProductsController.create`](src/controllers/products-controller.ts) — criação de produto (validação com zod).
- [`myMiddleware`](src/middlewares/my-middleware.ts) — middleware que seta `request.user_id`.
- [`AppError`](src/utils/app-error.ts) — classe de erro customizada.
- [`Express.Request`](src/types/request.d.ts) — declaração de tipo que adiciona `user_id` a Request.

## Estrutura do repositório

- [.gitignore](./.gitignore)
- [package.json](./package.json)
- [tsconfig.json](./tsconfig.json)
- [src/server.ts](./src/server.ts)
- [src/routes/index.ts](./src/routes/index.ts)
- [src/routes/products-routes.ts](./src/routes/products-routes.ts)
- [src/controllers/products-controller.ts](./src/controllers/products-controller.ts)
- [src/middlewares/my-middleware.ts](./src/middlewares/my-middleware.ts)
- [src/utils/app-error.ts](./src/utils/app-error.ts)
- [src/types/request.d.ts](./src/types/request.d.ts)

## Como executar

Instale dependências e rode em modo de desenvolvimento:

```sh
npm install
npm run dev
```

O script `dev` usa o comando definido em [package.json](./package.json).

O servidor roda por padrão em: `http://localhost:3333` — configurado em [src/server.ts](src/server.ts).

## Endpoints

Base: `http://localhost:3333`

- GET /products

  - Rota: [productsRoutes GET /](src/routes/products-routes.ts)
  - Exemplo:
    ```sh
    curl "http://localhost:3333/products?page=1&limit=10"
    ```

- POST /products
  - Rota: [productsRoutes POST /](src/routes/products-routes.ts)
  - Validação do corpo feita em [`ProductsController.create`](src/controllers/products-controller.ts) com `z.object` (zod).
  - Exemplos:
    ```sh
    curl -X POST http://localhost:3333/products \
      -H "Content-Type: application/json" \
      -d '{"name":"Produto A","price":10.5}'
    ```

Resposta de sucesso (201):

```json
{
  "name": "Produto A",
  "price": 10.5,
  "user_id": "1"
}
```

## Tratamento de erros

- Erros previstos podem usar a classe [`AppError`](src/utils/app-error.ts) para retornar mensagens e códigos HTTP.
- Validações com zod lançam `ZodError` e são tratadas em [src/server.ts](src/server.ts).

## Observações

- O middleware [`myMiddleware`](src/middlewares/my-middleware.ts) adiciona `request.user_id = '1'`. A tipagem dessa propriedade está em [src/types/request.d.ts](src/types/request.d.ts).
- Configuração TypeScript em [tsconfig.json](./tsconfig.json).
- Dependências principais: `express`, `zod`.

## Referências rápidas

- [src/server.ts](src/server.ts) — servidor e handler de erros
- [src/routes/index.ts](src/routes/index.ts) — roteamento principal
- [src/routes/products-routes.ts](src/routes/products-routes.ts) — rotas de produtos
- [src/controllers/products-controller.ts](src/controllers/products-controller.ts) — lógica dos endpoints
- [src/middlewares/my-middleware.ts](src/middlewares/my-middleware.ts) — middleware de exemplo
- [src/utils/app-error.ts](src/utils/app-error.ts) — classe de
