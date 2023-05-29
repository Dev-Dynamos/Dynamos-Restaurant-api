import { RequestError } from "../../../../typeErrors/error-api";
import { ProvinceDTO } from "../../dtos";
import { ProvinceRepository } from "../../repositories/implementation/ProvinceRepository";

export class CreateProvinceUseCase {
  constructor(private provinceRepository: ProvinceRepository){}

  async execute(data: ProvinceDTO){
    const provinceAlreadyExists = await this.provinceRepository.findByName(data.nome);

    if(provinceAlreadyExists) throw new RequestError("Província já existe.", 400)

    const newProvince = await this.provinceRepository.save(data)
    return newProvince
  }
}