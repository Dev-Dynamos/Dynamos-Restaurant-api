import { RequestError } from "../../../../typeErrors/error-api";
import { SchoolRepository } from "../../repositories/implementation/SchoolRepository";

export class GetSchoolUseCase {
  constructor(private schoolRepository: SchoolRepository){}

  async execute(id: string){
    const school = await this.schoolRepository.findById(id)

    if(!school) throw new RequestError("Escola não encontrada.", 404)

    return school
  }
}