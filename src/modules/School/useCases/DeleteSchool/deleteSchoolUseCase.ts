import { RequestError } from "../../../../typeErrors/error-api";
import { SchoolRepository } from "../../repositories/implementation/SchoolRepository";

export class DeleteSchoolUseCase {
  constructor(private schoolRepository: SchoolRepository){}

  async execute(id: string){
    const schoolExists = await this.schoolRepository.findById(id)

    if(!schoolExists) throw new RequestError("Escola não encontrada.", 404)

    const deletedSchool = await this.schoolRepository.delete(id)
    return deletedSchool
  }
}