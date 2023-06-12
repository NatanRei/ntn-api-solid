import { PrismaCheckInsRepository } from "@/http/repositories/prisma/prisma-check-ins-repository";
import { CheckInUseCase } from "../check-in";
import { PrismaGymsRepository } from '@/http/repositories/prisma/prisma-gyms-repository';

export function makeGetUserMetricsUseCase() {
    const checkInsRepository = new PrismaCheckInsRepository()
    const gymsRepository = new PrismaGymsRepository()
    const useCase = new CheckInUseCase(checkInsRepository, gymsRepository)

    return useCase
}