import { OfficialRepository } from "../../repositories/implementation/OfficialRepository";

export class GetOfficialsUseCase {
  constructor(private officialRepository: OfficialRepository){}

  async execute(){
    const officials = await this.officialRepository.getOfficials()

    return officials
  }
}