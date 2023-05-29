import { RequestError } from "../../../../typeErrors/error-api";
import { SchoolDTO } from "../../dtos";
import { SchoolRepository } from "../../repositories/implementation/SchoolRepository";

export class UpdateSchoolUseCase {
  constructor(private schoolRepository: SchoolRepository){}

  async execute({ id, nome, nif, logo_url, categoriaId }: SchoolDTO){
    const schoolExists = await this.schoolRepository.findById(id)

    if(!schoolExists) throw new RequestError("Escola não encontrada.", 404)

    const updatedSchool = await this.schoolRepository.update({ id, nome, nif, logo_url, categoriaId })
    return updatedSchool
  }
}