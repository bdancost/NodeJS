import express from 'express'
import { myMiddleware } from './middlewares/my-middleware'

const PORT = 3333

const app = express()
app.use(express.json())

app.use(myMiddleware)

app.get('/products/', (request, response) => {
  const { page, limit } = request.query
  response.send(`Listagem de produtos ${page} e ${limit}`)
})

app.post('/products/', (request, response) => {
  const { name, price } = request.body

  response.status(201).json({
    name,
    price,
  })
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
