import request from 'supertest'
import { app } from "@/app";
import { it, describe, expect, beforeAll, afterAll } from "vitest";
import { createAndAuthenticateUser } from '@/utils/tests/create-and-authenticate-user';


describe('Nearby Gym (e2e)', () => {

    beforeAll(async () => {
        await app.ready()
    })
    afterAll(async () => {
        await app.close()
    })

    it('should be able to list nearby gyms', async () => {
        const { token } = await createAndAuthenticateUser(app, true)

        await request(app.server)
        .post('/gyms')
        .set("Authorization", `Bearer ${token}`)
        .send({
            title: 'Test Gym',
            description: 'Some description',
            phone: '11999999999',
            latitude: 0,
            longitude: 0
        })

        await request(app.server)
        .post('/gyms')
        .set("Authorization", `Bearer ${token}`)
        .send({
            title: 'Test Two Gym',
            description: 'Some description',
            phone: '11999999999',
            latitude: 21,
            longitude: 21
        })

        const response = await request(app.server)
        .get('/gyms/nearby')
        .query({
            latitude: 21,
            longitude: 21
        })
        .set("Authorization", `Bearer ${token}`)
        .send()

        expect(response.statusCode).toEqual(200)
        expect(response.body.gyms).toHaveLength(1)
        expect(response.body.gyms).toEqual([
            expect.objectContaining({
            title: 'Test Two Gym'
            })
        ])

    })
})