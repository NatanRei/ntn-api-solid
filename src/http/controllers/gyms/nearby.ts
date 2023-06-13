import { makeFetchNearbyGymsUseCase } from '@/use-cases/factories/make-fetch-nearby-gyms-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function nearby( request: FastifyRequest, reply: FastifyReply ) {
    const nearbyGymsBodySchema = z.object({
        latitude: z.number().refine(value => {
            return Math.abs(value) <= 90
        }),
        longitude: z.number().refine(value => {
            return Math.abs(value) <= 180
        }),
    })

    const { latitude, longitude } = nearbyGymsBodySchema.parse(request.body)
    
        const fetchNearbyGymsUseCase = makeFetchNearbyGymsUseCase()
        await fetchNearbyGymsUseCase.execute({
            userLatitude: latitude, 
            userLongitude: longitude
        })

    return reply.status(200).send()
}