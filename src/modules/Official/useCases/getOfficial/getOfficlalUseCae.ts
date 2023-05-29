import { RequestError } from "../../../../typeErrors/error-api";
import { OfficialRepository } from "../../repositories/implementation/OfficialRepository";

export class GetOfficialUseCase {
  constructor(private officialRepository: OfficialRepository){}

  async execute(id: string){
    const official = await this.officialRepository.findById(id)

    if(!official) throw new RequestError("Funcionário não encontrado.", 404)

    return official
  }
}