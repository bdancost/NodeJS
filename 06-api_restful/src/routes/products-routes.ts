import { Router } from 'express'
import { myMiddleware } from '../middlewares/my-middleware'

const productsRoutes = Router()

productsRoutes.get('/', (request, response) => {
  const { page, limit } = request.query
  response.send(`Listagem de produtos ${page} e ${limit}`)
})

productsRoutes.post('/', myMiddleware, (request, response) => {
  const { name, price } = request.body

  response.status(201).json({
    name,
    price,
    user_id: request.user_id,
  })
})

export { productsRoutes }
