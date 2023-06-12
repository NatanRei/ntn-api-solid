import { RegisterUseCase } from './register';
import { describe, expect, it, beforeEach } from 'vitest'
import { compare } from 'bcryptjs';
import { InMemoryUsersRepository } from '@/http/repositories/in-memory/in-memory-users-repository';
import { UserAlreadyExistsError } from './errors/user-already-exists';

let usersRepository: InMemoryUsersRepository
let sut: RegisterUseCase

describe('Register Use Case', () => {
    beforeEach(() => {
        usersRepository = new InMemoryUsersRepository()
        sut = new RegisterUseCase(usersRepository)
    })

    it('should be able to register', async () => {
        const { user } = await sut.execute({
            name: 'John Doe',
            email: 'johndoe@example.com',
            password: '123456'
        })

        expect(user.id).toEqual(expect.any(String))
    })

    it('should hash password upon registration', async () => {
        const { user } = await sut.execute({
            name: 'John Doe',
            email: 'johndoe@example.com',
            password: '123456'
        })

        const isPasswordCorrectlyHashed = await compare(
            '123456',
            user.password_hash
        )

        expect(isPasswordCorrectlyHashed).toBe(true)
    })

    it('should not be able to register with same email twice', async () => {
        const email = 'johndoe@example.com'

        await sut.execute({
            name: 'John Doe',
            email,
            password: '123456'
        })

        await expect(() => sut.execute({
            name: 'John Doe',
            email,
            password: '123456'
        })).rejects.toBeInstanceOf(UserAlreadyExistsError)
    })
})