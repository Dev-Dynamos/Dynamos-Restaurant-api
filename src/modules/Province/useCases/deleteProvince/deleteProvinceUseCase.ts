import { RequestError } from "../../../../typeErrors/error-api";
import { ProvinceDTO } from "../../dtos";
import { ProvinceRepository } from "../../repositories/implementation/ProvinceRepository";

export class DeleteProvinceUseCase {
  constructor(private provinceRepository: ProvinceRepository){}

  async execute({ id }: ProvinceDTO){
    const provinceExists = await this.provinceRepository.findById(id)

    if(!provinceExists) throw new RequestError("Província não encontrada.", 404)

    const deletedProvince = await this.provinceRepository.delete(id)
    return deletedProvince
  }
}