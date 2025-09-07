import request from 'supertest'
import { app } from '@/app.js'
import { describe, expect, it, beforeAll, afterAll } from 'vitest'
import { createAndAuthenticateUse } from '@/utils/test/create-and-authenticate-use.js'

describe('Create Gym (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })
  afterAll(async () => {
    await app.close()
  })

  it('should be able to create a gym', async () => {
    const { token } = await createAndAuthenticateUse(app)

    const response = await request(app.server)
      .post('/gyms')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'JavaScript Gym',
        description: 'Some description',
        phone: '11999999999',
        latitude: -23.6220481,
        longitude: -46.9319517,
      })

    expect(response.statusCode).toEqual(201)
  })
})
