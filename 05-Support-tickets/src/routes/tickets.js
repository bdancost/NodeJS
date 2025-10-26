import { create } from '../controllers/tickets/create.js'
import { index } from '../controllers/tickets/index.js'
import { update } from '../controllers/tickets/update.js'
import { updateStatus } from '../controllers/tickets/updateStatus.js'

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
  {
    method: 'PUT',
    path: '/tickets/:id',
    controllers: update,
  },
  {
    method: 'PATCH',
    path: '/tickets/:id/close',
    controllers: updateStatus,
  },
]
