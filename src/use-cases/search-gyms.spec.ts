import { describe, expect, it, beforeEach } from 'vitest'
import { InMemoryGymsRepository } from '@/http/repositories/in-memory/in-memory-gyms-repository';
import { SearchGymsUseCase } from './search-gyms';

let gymsRepository: InMemoryGymsRepository
let sut: SearchGymsUseCase

describe('Search Gyms Use Case', () => {
    beforeEach(async () => {
        gymsRepository = new InMemoryGymsRepository()
        sut = new SearchGymsUseCase(gymsRepository)

    })


    it('should be able to fetch check-in history', async () => {
        await gymsRepository.create({
            title: 'JS Gym',
            description: null,
            phone: null,
            latitude: 0,
            longitude: 0
        })

        await gymsRepository.create({
            title: 'TS Gym',
            description: null,
            phone: null,
            latitude: 0,
            longitude: 0
        })

        const { gyms } = await sut.execute({
            query: 'JS',
            page: 1
        })

        expect(gyms).toHaveLength(1)
        expect(gyms).toEqual([
            expect.objectContaining({ title: 'JS Gym' }),

        ])
    })

    it('should be able to fetch paginated gyms search', async () => {
        for (let i = 1; i <= 22; i++) {
            await gymsRepository.create({
                title: `JS Gym ${i}`,
                description: null,
                phone: null,
                latitude: 0,
                longitude: 0
            })
        }

        const { gyms } = await sut.execute({
            query: 'JS',
            page: 2
        })

        expect(gyms).toHaveLength(2)
        expect(gyms).toEqual([
            expect.objectContaining({ title: 'JS Gym 21' }),
            expect.objectContaining({ title: 'JS Gym 22' }),

        ])
    })
})