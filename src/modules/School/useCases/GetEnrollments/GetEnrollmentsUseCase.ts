import { SchoolRepository } from "../../repositories/implementation/SchoolRepository";

interface IRequest {
  escolaId: string;
}

export class GetEnrollmentsUseCase {
  constructor(private schoolRepository: SchoolRepository) {}

  async execute({ escolaId }: IRequest){
    return await this.schoolRepository.getEnrollments(escolaId);
  }
}