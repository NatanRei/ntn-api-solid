import { PrismaUsersRepository } from "@/http/repositories/prisma/prisma-users-repository";
import { RegisterUseCase } from "../register";

export function makeRegisterUseCase() {
    const usersRepository = new PrismaUsersRepository()
    const useCase = new RegisterUseCase(usersRepository)

    return useCase
}