import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository.js'
import { expect, describe, it, beforeEach } from 'vitest'
import { CreateGymUseCase } from './create-gym.js'

let gymsRepository: InMemoryGymsRepository
let sut: CreateGymUseCase

describe('Register Use Case', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new CreateGymUseCase(gymsRepository)
  })
  it('should be able to create gym', async () => {
    const { gym } = await sut.execute({
      title: 'JavaScript Gym',
      description: '',
      phone: '',
      latitude: -23.6220481,
      longitude: -46.9319517,
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})
