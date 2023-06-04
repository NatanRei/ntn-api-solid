import { PrismaUsersRepository } from "@/http/repositories/prisma/prisma-users-repository";
import { AuthenticateUseCase } from "../authenticate";

export function makeAuthenticateUseCase() {
    const usersRepository = new PrismaUsersRepository()
        const authenticateUseCase = new AuthenticateUseCase(usersRepository)

    return authenticateUseCase
}


