# 🚀 API Exemplo (Docker + Node.js + TypeScript)

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=22&pause=1000&color=2b7a78&center=true&vCenter=true&width=700&lines=API+Exemplo+%E2%9C%8C+Docker+%7C+Node.js+%7C+PostgreSQL" alt="typing"/>
</p>

[![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)](https://www.docker.com/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-31648f?style=flat&logo=postgresql&logoColor=white)](https://www.postgresql.org/)

Descrição curta

- Projeto exemplo de uma API em Node.js + TypeScript, preparada para execução local e via Docker Compose. Inclui um serviço PostgreSQL isolado por container.

Índice

- Visão geral
- Rápido início
- Executando com Docker Compose
- Variáveis de ambiente / portas
- Scripts úteis
- Estrutura do projeto
- Boas práticas / DEBUG
- Contribuição / Licença

Visão geral

- Servidor HTTP: porta 3333 (padrão)
- Banco: PostgreSQL no container (porta host mapeada para 5435)
- Objetivo: ambiente replicável para desenvolvimento e testes com hot-reload local e containerização para produção.

Rápido início — local

1. Instale dependências:

```bash
npm install
```

2. Rode em modo desenvolvimento (hot-reload):

```bash
npm run dev
```

3. Abra: http://localhost:3333

Executando com Docker (recomendado)

1. Subir containers:

```bash
docker compose up --build
```

2. Para rodar em background:

```bash
docker compose up --build -d
```

3. Parar e remover:

```bash
docker compose down
```

Configuração (docker-compose.yml)

- Serviço api
  - Porta: 3333 (host:container 3333:3333)
  - Imagem construída a partir do Dockerfile
- Serviço postgres (bitnami/postgresql)
  - Porta do host: 5435 (host:container 5435:5432)
  - Volume persistente: volume `database`

Variáveis de ambiente (padrão no docker-compose.yml)

- POSTGRES_USER=postgres
- POSTGRES_PASSWORD=postgres
- POSTGRES_DB=api

Ports summary

- API: http://localhost:3333
- PostgreSQL (host): localhost:5435

Scripts úteis (package.json)

- npm run dev — desenvolvimento (hot-reload)
- npm run build — compilar TypeScript para dist/
- npm start — executar build compilado

Estrutura do projeto

- Dockerfile
- docker-compose.yml
- src/ — código TypeScript
- dist/ — build (após npm run build)
- package.json
- tsconfig.json
- .dockerignore / .gitignore
- README.md

Boas práticas e dicas

- Para alterar dependências que afetem a imagem Docker, reconstrua a imagem:

```bash
docker compose build --no-cache
```

- Logs do container:

```bash
docker compose logs -f api
```

- Acesse o container:

```bash
docker compose exec api sh
```

- Acesse o Postgres (local) com psql:

```bash
psql -h localhost -p 5435 -U postgres -d api
```

Possíveis problemas e soluções rápidas

- Erro de porta ocupada: verifique se 3333 (API) ou 5435 (Postgres host) já não estão em uso.
- Permissões de volume no Mac: se houver problemas com volumes, reinicie o Docker Desktop e conceda permissões necessárias.
- Erro de conexão DB: confirme credenciais e que o service postgres iniciou antes da API (docker compose garante dependência, mas a aplicação pode precisar de retry logic).

Melhorando o README (ilustrações e animações)

- O README já usa badges e um texto animado gerado (typing SVG).
- Para imagens/ GIFs animados personalizados, adicione na raiz do repositório e referencie com:

```markdown
![exemplo-animacao](./assets/animation.gif)
```

- Use badges dinâmicos (shields.io) para CI, cobertura, Docker Hub, etc.

Contribuição

- Fork → branch feature → PR com descrição clara
- Siga convenções de commit e codestyle (Adicione linter/formatter se desejar)

Licença

- Adicione um arquivo LICENSE na raiz. (Escolha MIT, Apache-2.0, etc.)

Contato / Suporte

- Edite o código em src/ para rotas e lógica. Para dúvidas abra issue no repositório.

Obrigado por usar este projeto — faça melhorias, adicione testes e integre CI para torná-lo
