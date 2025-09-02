import type { FastifyInstance } from 'fastify'
import { register } from '@/http/controllers/register.js'
import { profile } from './controllers/profile.js'
import { authenticate } from './controllers/autheticate.js'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)

  app.post('/sessions', authenticate)

  app.get('/me', profile)
}
