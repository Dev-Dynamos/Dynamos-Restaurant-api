import { SchoolRepository } from "../../repositories/implementation/SchoolRepository";

interface IRequest {
  escolaId: string;
}

export class GetTrainingAreasUseCase {
  constructor(private schoolRepository: SchoolRepository) {}

  async execute({ escolaId }: IRequest){
    return await this.schoolRepository.getTrainingAreas(escolaId);
  }
}