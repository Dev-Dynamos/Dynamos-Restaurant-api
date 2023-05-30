import { IDepartamentRepository } from "../repository/IDepartamentRepository";
import { CreateDepartamentDTO } from "../DepartamentDTOs/CreateDepartamentDTO";

export class CreateDepartamentUseCase {
  constructor(private departamentRepository: IDepartamentRepository) {}

  async execute({ designacao }: CreateDepartamentDTO) {
    const departament = await this.departamentRepository.create({ designacao });

    return departament;
  }
}
