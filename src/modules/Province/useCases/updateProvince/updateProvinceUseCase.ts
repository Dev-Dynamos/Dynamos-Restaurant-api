import { ProvinceRepository } from "../../repositories/implementation/ProvinceRepository";
import { ProvinceDTO } from "../../dtos";
import { RequestError } from "../../../../typeErrors/error-api";

export class UpdateProvinceUseCase {
  constructor(private provinceRepository: ProvinceRepository) { }

  async execute({id, nome}: ProvinceDTO) {
    const provinceExists = await this.provinceRepository.findById(id)

    if(!provinceExists) throw new RequestError("Província não encontrada.", 404)

    const udatedProvince = await this.provinceRepository.update({ id, nome })
    return udatedProvince
  }
}