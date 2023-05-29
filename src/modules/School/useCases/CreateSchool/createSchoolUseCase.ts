import { RequestError } from "../../../../typeErrors/error-api";
import { SchoolDTO } from "../../dtos";
import { SchoolRepository } from "../../repositories/implementation/SchoolRepository";

export class CreateSchoolUseCase {
  constructor(private schoolRepository: SchoolRepository) { }

  async execute({ nome, nif, logo_url, categoriaId, fotoUrl }: SchoolDTO) {
    const schoolAlreadyExists = await this.schoolRepository.findByName(nome)
    const categoryExists = await this.schoolRepository.findCategoryById(categoriaId)

    if (schoolAlreadyExists) throw new RequestError("Escola já existe", 400)
    if (!categoryExists) throw new RequestError("Categoria não encontrada", 400)

    const newSchool = await this.schoolRepository.save({ nome, nif, logo_url, categoriaId, fotoUrl })
    return newSchool
  }
}