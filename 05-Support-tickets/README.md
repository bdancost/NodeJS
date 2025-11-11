...existing code...

## Diagrama do fluxo principal

Diagrama mermaid mostrando o fluxo principal da aplicação: requisição -> parsing JSON -> roteamento -> controllers -> operações na base de dados.

```mermaid
flowchart LR
  Client[Cliente] --> Server["server.js<br/>([server.js](http://_vscodecontentref_/0))"]
  Server --> JsonHandler["jsonHandler<br/>([jsonHandler.js](http://_vscodecontentref_/1))"]
  JsonHandler --> RouteHandler["routeHandler<br/>([routeHandler.js](http://_vscodecontentref_/2))"]
  RouteHandler --> Routes["routes<br/>([index.js](http://_vscodecontentref_/3))"]
  Routes --> ParsePath["parseRoutePath<br/>([parseRoutePath.js](http://_vscodecontentref_/4))"]
  RouteHandler --> Match{"Rota encontrada?"}
  Match -- sim --> Controllers["Controller selecionado<br/>([tickets.js](http://_vscodecontentref_/5))"]
  Controllers --> Create["create<br/>([create.js](http://_vscodecontentref_/6))"]
  Controllers --> Index["index<br/>([index.js](http://_vscodecontentref_/7))"]
  Controllers --> Update["update<br/>([update.js](http://_vscodecontentref_/8))"]
  Controllers --> UpdateStatus["updateStatus<br/>([updateStatus.js](http://_vscodecontentref_/9))"]
  Controllers --> Remove["remove<br/>([remove.js](http://_vscodecontentref_/10))"]
  Controllers --> DatabaseClass["Database<br/>([database.js](http://_vscodecontentref_/11))"]
  DatabaseClass --> DBFile["db.json<br/>([db.json](http://_vscodecontentref_/12))"]
  Match -- não --> NotFound[Resposta 404]
  Controllers --> Response[Resposta ao cliente]


Referências rápidas (abra estes arquivos/símbolos no workspace):

- [server](http://_vscodecontentref_/13) — [server.js](http://_vscodecontentref_/14)
- [jsonHandler](http://_vscodecontentref_/15) — [jsonHandler.js](http://_vscodecontentref_/16)
- [routeHandler](http://_vscodecontentref_/17) — [routeHandler.js](http://_vscodecontentref_/18)
- [routes](http://_vscodecontentref_/19) — [index.js](http://_vscodecontentref_/20)
- [tickets.js](http://_vscodecontentref_/21)
  - [create](http://_vscodecontentref_/22) — [create.js](http://_vscodecontentref_/23)
  - [index](http://_vscodecontentref_/24) — [index.js](http://_vscodecontentref_/25)
  - [update](http://_vscodecontentref_/26) — [update.js](http://_vscodecontentref_/27)
  - [updateStatus](http://_vscodecontentref_/28) — [updateStatus.js](http://_vscodecontentref_/29)
  - [remove](http://_vscodecontentref_/30) — [remove.js](http://_vscodecontentref_/31)
- [Database](http://_vscodecontentref_/32) — [database.js](http://_vscodecontentref_/33)
- [db.json](http://_vscodecontentref_/34)
- [parseRoutePath](http://_vscodecontentref_/35) — [parseRoutePath.js](http://_vscodecontentref_/36)
- [extractQueryParams](http://_vscodecontentref_/37)
```
