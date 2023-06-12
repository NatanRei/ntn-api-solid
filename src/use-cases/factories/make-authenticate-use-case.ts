import { PrismaUsersRepository } from "@/http/repositories/prisma/prisma-users-repository"
import { AuthenticateUseCase } from "../authenticate"


export function makeAuthenticateUseCase() {
    const usersRepository = new PrismaUsersRepository()
        const useCase = new AuthenticateUseCase(usersRepository)

    return useCase
}


