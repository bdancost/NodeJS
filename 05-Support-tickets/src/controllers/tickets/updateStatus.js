export function updateStatus({ req, res, database }) {
  const { id } = req.params

  database.update('tickets', id, {
    status: 'closed',
    updated_at: new Date(),
  })

  return res.writeHead(200).end()
}
