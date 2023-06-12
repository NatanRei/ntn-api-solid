import { describe, expect, it, beforeEach } from 'vitest'
import { CreateGymUseCase } from './create-gym';
import { InMemoryGymsRepository } from '@/http/repositories/in-memory/in-memory-gyms-repository';

let gymsRepository: InMemoryGymsRepository
let sut: CreateGymUseCase

describe('Create Gym Use Case', () => {
    beforeEach(() => {
        gymsRepository = new InMemoryGymsRepository()
        sut = new CreateGymUseCase(gymsRepository)
    })

    it('should be able to create gym', async () => {
        const { gym } = await sut.execute({
            title: 'Natan\'s Gym',
            description: 'Academia do Natan',
            phone: null,
            latitude: 20,
            longitude: 20
        })

        expect(gym.id).toEqual(expect.any(String))
    })
})