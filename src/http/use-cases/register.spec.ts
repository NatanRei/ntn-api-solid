import { RegisterUseCase } from './register';
import { PrismaUsersRepository } from './../repositories/prisma/prisma-users-repository';
import { describe, expect, it } from 'vitest'
import { compare } from 'bcryptjs';

describe('Register Use Case', () => {
    it('should hash password upon registration', async () => {
        const prismaUsersRepository = new PrismaUsersRepository();
        const registerUseCase = new RegisterUseCase(prismaUsersRepository)

        const { user } = await registerUseCase.execute({
            name: 'John Doe',
            email: 'john@doe.com',
            password: '123456'
        })

        const isPasswordCorrectlyHashed = await compare(
            '123456',
            user.password_hash
        )

        expect(isPasswordCorrectlyHashed).toBe(true)
    })
})