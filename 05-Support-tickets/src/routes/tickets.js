import { create } from '../controllers/tickets/create.js'
import { index } from '../controllers/tickets/index.js'

export const tickets = [
  {
    method: 'POST',
    path: '/tickets',
    controllers: create,
  },
  {
    method: 'GET',
    path: '/tickets',
    controllers: index,
  },
]
