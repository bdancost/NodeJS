import type { FastifyInstance } from 'fastify'
import { register } from '@/http/controllers/register.js'
import { authenticate } from './controllers/autheticate.js'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)

  app.post('/sessions', authenticate)
}
