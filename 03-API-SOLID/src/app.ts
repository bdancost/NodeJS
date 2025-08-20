import fastify from 'fastify'
import { PrismaClient } from './generated/prisma/index.js'

export const app = fastify({})

// ORM - Object Relational Mapping
const prisma = new PrismaClient()

prisma.user.create({
  data: {
    name: 'John Doe',
    email: 'john@doe',
  },
})
