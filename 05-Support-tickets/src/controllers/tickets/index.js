/**
 * CREATE - criar
 * INDEX - listar
 * UPDATE - atualizar
 * REMOVE - remover
 * SHOW - para exibir um único registro
 */

export function index({ req, res, database }) {
  const { status } = req.query

  const tickets = database.select('tickets')

  return res.end(JSON.stringify(tickets))
}
