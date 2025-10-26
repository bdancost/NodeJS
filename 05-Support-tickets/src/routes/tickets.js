import { create } from '../controllers/tickets/create.js'
import { index } from '../controllers/tickets/index.js'
import { update } from '../controllers/tickets/update.js'
import { updateStatus } from '../controllers/tickets/updateStatus.js'
import { remove } from '../controllers/tickets/remove.js'

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
  {
    method: 'DELETE',
    path: '/tickets/:id',
    controllers: remove,
  },
]
