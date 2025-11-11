# DDD (Domain-driven Design)

Aplicação de exemplo demonstrando conceitos de Domain-Driven Design (DDD) com TypeScript. Contém entidades do domínio, casos de uso, repositórios em memória para testes e uma suíte de testes com Vitest.

## Tecnologias

- TypeScript
- Vitest (testes)
- Vite (configuração de dev/test)
- dayjs, @faker-js/faker (auxiliares)

Arquivos de configuração:

- [package.json](package.json)
- [tsconfig.json](tsconfig.json)
- [vite.config.ts](vite.config.ts)

## Como rodar os testes

Instale as dependências e execute os testes:

```sh
npm install
npm run test
# modo watch
npm run test:watch
```

Os scripts estão definidos em [package.json](package.json).

## Estrutura principal

- src/ - código da aplicação
  - core/ - utilitários e infra do núcleo (ex.: [`either`](src/core/either.ts), [`entities`](src/core/entities/))
  - domain/ - domínio do sistema (forum, notification)
    - forum/ - entidades e casos de uso do fórum (ex.: [`Question`](src/domain/forum/enterprise/entities/question.ts))
    - notification/ - envio de notificações (ex.: [`SendNotificationUseCase`](src/domain/notification/application/use-case/send-notification.ts))
- test/ - factories e repositórios em memória usados nos testes

Alguns arquivos relevantes:

- [`src/core/either.ts`](src/core/either.ts)
- [`src/core/entities/unique-entity-id.ts`](src/core/entities/unique-entity-id.ts)
- [`src/domain/forum/enterprise/entities/question.ts`](src/domain/forum/enterprise/entities/question.ts)
- [`src/domain/notification/application/use-case/send-notification.ts`](src/domain/notification/application/use-case/send-notification.ts)
- Repositórios de teste: [test/repositories](test/repositories)

## Boas práticas

- Casos de uso retornam objetos do tipo Either (sucesso ou erro) — ver [`src/core/either.ts`](src/core/either.ts).
- Entidades usam `UniqueEntityID` para identificação — ver [`src/core/entities/unique-entity-id.ts`](src/core/entities/unique-entity-id.ts).
- Testes usam repositórios em memória em `test/repositories` e factories em `test/factories`.

## Contribuição

1. Faça um fork.
2. Crie uma branch com sua feature: git checkout -b feature/nome
3. Faça commits atômicos.
4. Abra um pull request.

## Licença

Projeto de estudo — sem licença definida.

````// filepath: /Users/danielfernandes/Documents/Estudos/javascript/Node/NodeJS/04-CLEAN-DDD/README.md
// ...existing code...
# 04 - Clean DDD

Aplicação de exemplo demonstrando conceitos de Domain-Driven Design (DDD) com TypeScript. Contém entidades do domínio, casos de uso, repositórios em memória para testes e uma suíte de testes com Vitest.

## Tecnologias
- TypeScript
- Vitest (testes)
- Vite (configuração de dev/test)
- dayjs, @faker-js/faker (auxiliares)

Arquivos de configuração:
- [package.json](package.json)
- [tsconfig.json](tsconfig.json)
- [vite.config.ts](vite.config.ts)

## Como rodar os testes
Instale as dependências e execute os testes:

```sh
npm install
npm run test
# modo watch
npm run test:watch
````

Os scripts estão definidos em [package.json](package.json).

## Estrutura principal

- src/ - código da aplicação
  - core/ - utilitários e infra do núcleo (ex.: [`either`](src/core/either.ts), [`entities`](src/core/entities/))
  - domain/ - domínio do sistema (forum, notification)
    - forum/ - entidades e casos de uso do fórum (ex.: [`Question`](src/domain/forum/enterprise/entities/question.ts))
    - notification/ - envio de notificações (ex.: [`SendNotificationUseCase`](src/domain/notification/application/use-case/send-notification.ts))
- test/ - factories e repositórios em memória usados nos testes

Alguns arquivos relevantes:

- [`src/core/either.ts`](src/core/either.ts)
- [`src/core/entities/unique-entity-id.ts`](src/core/entities/unique-entity-id.ts)
- [`src/domain/forum/enterprise/entities/question.ts`](src/domain/forum/enterprise/entities/question.ts)
- [`src/domain/notification/application/use-case/send-notification.ts`](src/domain/notification/application/use-case/send-notification.ts)
- Repositórios de teste: [test/repositories](test/repositories)

## Boas práticas

- Casos de uso retornam objetos do tipo Either (sucesso ou erro) — ver [`src/core/either.ts`](src/core/either.ts).
- Entidades usam `UniqueEntityID` para identificação — ver [`src/core/entities/unique-entity-id.ts`](src/core/entities/unique-entity-id.ts).
- Testes usam repositórios em memória em `test/repositories` e factories em `test/factories`.

## Contribuição

1. Faça um fork.
2. Crie uma branch com sua feature: git checkout -b feature/nome
3. Faça commits atômicos.
4. Abra um pull request.

## Licença

Projeto de estudo — sem licença
