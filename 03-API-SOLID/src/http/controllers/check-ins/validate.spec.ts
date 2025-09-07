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

  it('should be able to validate a check-in', async () => {
    const { token } = await createAndAuthenticateUse(app, true)

    const user = await prisma.user.findFirstOrThrow()

    const gym = await prisma.gym.create({
      data: {
        title: 'JavaScript Gym',
        latitude: -23.6220481,
        longitude: -46.9319517,
      },
    })

    let checkIn = await prisma.checkIn.create({
      data: {
        gym_id: gym.id,
        user_id: user.id,
      },
    })

    const response = await request(app.server)
      .patch(`/check-ins/${checkIn.id}/validate`)
      .set('Authorization', `Bearer ${token}`)
      .send()

    expect(response.statusCode).toEqual(204)

    checkIn = await prisma.checkIn.findUniqueOrThrow({
      where: { id: checkIn.id },
    })

    expect(checkIn.validate_at).toEqual(expect.any(Date))
  })
})
