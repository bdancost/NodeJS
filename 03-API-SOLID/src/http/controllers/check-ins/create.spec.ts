import request from 'supertest'
import { app } from '@/app.js'
import { describe, expect, it, beforeAll, afterAll } from 'vitest'
import { createAndAuthenticateUse } from '@/utils/test/create-and-authenticate-use.js'
import { prisma } from '@/lib/prisma.js'

describe('Create Gym (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })
  afterAll(async () => {
    await app.close()
  })

  it('should be able to create a check-in', async () => {
    const { token } = await createAndAuthenticateUse(app)

    const gym = await prisma.gym.create({
      data: {
        title: 'JavaScript Gym',
        latitude: -23.6220481,
        longitude: -46.9319517,
      },
    })

    const response = await request(app.server)
      .post(`/gyms/${gym.id}/check-ins`)
      .set('Authorization', `Bearer ${token}`)
      .send({
        latitude: -23.6220481,
        longitude: -46.9319517,
      })

    expect(response.statusCode).toEqual(201)
  })
})
