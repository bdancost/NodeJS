import type { FastifyInstance } from 'fastify'
import { register } from '@/http/controllers/register.js'
import { profile } from './controllers/profile.js'
import { authenticate } from './controllers/autheticate.js'
import { verifyJWT } from './middlewares/verify-jwt.js'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)

  app.post('/sessions', authenticate)

  app.get('/me', { onRequest: [verifyJWT] }, profile)
}
