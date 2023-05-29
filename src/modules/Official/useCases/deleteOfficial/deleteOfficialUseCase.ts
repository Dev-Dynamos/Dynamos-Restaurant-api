import { RequestError } from "../../../../typeErrors/error-api";
import { OfficialRepository } from "../../repositories/implementation/OfficialRepository";

export class DeleteOfficialUseCase {
  constructor(private officialRepository: OfficialRepository){}

  async execute(id: string){
    const officialExists = await this.officialRepository.findById(id)

    if(!officialExists) throw new RequestError("Funcionário não encontrado.", 404)

    const deletedOfficial = await this.officialRepository.delete(id)
    return deletedOfficial
  }
}