import type { FastifyInstance } from 'fastify'
import { register } from '@/http/controllers/users/register.js'
import { profile } from './profile.js'
import { authenticate } from './autheticate.js'
import { reflesh } from './reflesh.js'
import { verifyJWT } from '../../middlewares/verify-jwt.js'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/sessions', authenticate)

  app.patch('/token/refresh', reflesh)

  app.get('/me', { onRequest: [verifyJWT] }, profile)
}
