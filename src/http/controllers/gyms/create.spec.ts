import request from 'supertest'
import { app } from "@/app";
import { it, describe, expect, beforeAll, afterAll } from "vitest";
import { createAndAuthenticateUser } from '@/utils/tests/create-and-authenticate-user';


describe('Create Gym (e2e)', () => {

    beforeAll(async () => {
        await app.ready()
    })
    afterAll(async () => {
        await app.close()
    })

    it('should be able to create a gym', async () => {
        const { token } = await createAndAuthenticateUser(app)

        const response = await request(app.server)
        .post('/gyms')
        .set("Authorization", `Bearer ${token}`)
        .send({
            title: 'Test Gym',
            description: 'Some description',
            phone: '11999999999',
            latitude: 0,
            longitude: 0
        })

        expect(response.statusCode).toEqual(201)
    })
})