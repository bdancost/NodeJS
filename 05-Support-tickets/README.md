# Support Tickets

Aplicação simples em Node.js para gerenciar chamados (tickets). Servidor HTTP minimalista com roteamento próprio e persistência em arquivo JSON.

## Tecnologias (com ícones)

- 🟢 Node.js — runtime JavaScript (ES Modules)
- 📦 npm — gerenciamento de pacotes
- 🗂️ fs/promises — leitura/escrita de arquivos JSON
- 🧩 Middlewares — tratamento de body JSON e roteamento
- 🧭 Roteamento customizado — parse de rotas e dispatch para controllers
- 🧾 JSON — formato de persistência (src/database/db.json)
- 🧰 Utilitários — helpers em src/utils

## Estrutura do projeto (resumido)

- src/
  - server.js — inicializa o servidor
  - middlewares/ — jsonHandler, routeHandler
  - routes/ — definição das rotas (tickets)
  - controllers/ — create, index, update, updateStatus, remove
  - database/ — Database: leitura/escrita em src/database/db.json
  - utils/ — parseRoutePath, extractQueryParams

## Como executar (macOS)

1. Instalar dependências (se houver):
   - npm install
2. Iniciar:
   - node src/server.js
     (ou usar o script em package.json, se presente)

Observação: se usar flags ou runtime específicos, ajustar conforme package.json.

## Endpoints principais

- GET /tickets
  - Lista tickets; suporta filtros via query string.
- POST /tickets
  - Cria um novo ticket (envie JSON no body).
- PUT /tickets/:id
  - Atualiza um ticket por id (envie campos a alterar).
- PATCH /tickets/:id/status
  - Atualiza somente o status do ticket.
- DELETE /tickets/:id
  - Remove ticket por id.

O servidor espera JSON no body; consulte os middlewares em src/middlewares.

## Persistência

Dados armazenados em src/database/db.json. A classe Database lê o arquivo na inicialização e grava ao inserir/atualizar/remover.

## Observações finais

Projeto para estudo — não pronto para produção sem melhorias (concorrência, validações, segurança, testes). Contribuições são bem-vindas (issues/PRs).

## Licença
