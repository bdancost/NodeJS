# Support Tickets

Aplicação simples em Node.js para gerenciar chamados (tickets). Fornece um servidor HTTP minimalista com roteamento próprio e persistência em arquivo JSON.

## Tecnologias

- Node.js (ES Modules)
- fs/promises (persistência em JSON)
- Arquitetura de controllers e middlewares

## Estrutura do projeto (resumido)

- src/
  - server.js — inicializa o servidor
  - middlewares/ — tratamento de JSON e roteamento
  - routes/ — definição das rotas (tickets)
  - controllers/ — lógica dos endpoints (create, index, update, updateStatus, remove)
  - database/ — Database (classe leve que lê/escreve src/database/db.json)
  - utils/ — utilitários (parseRoutePath, extractQueryParams)

## Como executar (macOS)

1. Instalar dependências (se houver):
   - npm install
2. Iniciar:
   - node --experimental-modules src/server.js
     (ou conforme script de package.json, se existir)

## Endpoints principais

- GET /tickets
  - Lista tickets, suporta filtros via query string (busca por campos).
- POST /tickets
  - Cria um novo ticket (envie JSON no body).
- PUT /tickets/:id
  - Atualiza um ticket por id (envie campos a alterar).
- PATCH /tickets/:id/status
  - Atualiza somente status do ticket.
- DELETE /tickets/:id
  - Remove ticket por id.

Observação: o servidor espera JSON no body; verifique as middlewares em src/middlewares.

## Persistência

Os dados são armazenados em src/database/db.json. A classe Database lê o arquivo na inicialização e escreve (persist) nas operações de insert/update/delete.

## Diagrama do fluxo principal

```mermaid
flowchart LR
  Client[Cliente] --> Server["server.js\n(src/server.js)"]
  Server --> JsonHandler["jsonHandler\n(src/middlewares/jsonHandler.js)"]
  JsonHandler --> RouteHandler["routeHandler\n(src/middlewares/routeHandler.js)"]
  RouteHandler --> Routes["routes\n(src/routes/index.js)"]
  Routes --> ParsePath["parseRoutePath\n(src/utils/parseRoutePath.js)"]
  RouteHandler --> Match{"Rota encontrada?"}
  Match -- sim --> Controller["Controller selecionado\n(src/routes/tickets.js)"]
  Controller --> Create["create\n(src/controllers/tickets/create.js)"]
  Controller --> Index["index\n(src/controllers/tickets/index.js)"]
  Controller --> Update["update\n(src/controllers/tickets/update.js)"]
  Controller --> UpdateStatus["updateStatus\n(src/controllers/tickets/updateStatus.js)"]
  Controller --> Remove["remove\n(src/controllers/tickets/remove.js)"]
  Controller --> DatabaseClass["Database\n(src/database/database.js)"]
  DatabaseClass --> DBFile["db.json\n(src/database/db.json)"]
  Match -- não --> NotFound[Resposta 404]
  Controller --> Response[Resposta ao cliente]

  Observações finais
Projeto pensado para estudo; não é recomendado para produção sem melhorias (concorrência, validações, testes, etc).
Para contribuições, abra issues ou PRs com descrições claras.
Licença
```
