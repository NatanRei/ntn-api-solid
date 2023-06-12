import { CheckInsRepository } from "@/http/repositories/check-ins-repository";

interface GetUserMetricsUseCaseRequest {
    userId: string
}

interface GetUserMetricsUseCaseResponse {
    checkInsCount: Number
}

export class GetUserMetricsUseCase {
    constructor (private checkInsRepository: CheckInsRepository) {}

    async execute({ 
        userId
    }: GetUserMetricsUseCaseRequest): Promise<GetUserMetricsUseCaseResponse> {
        const checkInsCount = await this.checkInsRepository.countByUserId(userId);

        return {
            checkInsCount
        }
    }
}