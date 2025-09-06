import type { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { makeCreateGymUseCase } from '@/use-cases/factories/make-create-gym-use-case.js'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createGymBodySchema = z.object({
    title: z.string(),
    description: z.string().nullable(),
    password: z.string().min(6),
    phone: z.string(),
    latitude: z.number().refine((val) => {
      return Math.abs(val) >= -90 && val <= 90
    }, 'Latitude must be between -90 and 90'),
    longitude: z.number().refine((val) => {
      return Math.abs(val) >= -180 && val <= 180
    }, 'Longitude must be between -180 and 180'),
  })

  const { title, description, phone, latitude, longitude } =
    createGymBodySchema.parse(request.body)

  const createGymUseCase = makeCreateGymUseCase()

  await createGymUseCase.execute({
    title,
    description,
    phone,
    latitude,
    longitude,
  })

  return reply.status(201).send()
}
