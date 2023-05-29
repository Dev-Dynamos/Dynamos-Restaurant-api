import { RequestError } from "../../../../typeErrors/error-api";
import { ProvinceDTO } from "../../dtos";
import { ProvinceRepository } from "../../repositories/implementation/ProvinceRepository";

export class GetProvinceUseCase {
  constructor(private provinceRepository: ProvinceRepository){}

  async execute(data: ProvinceDTO){
    const province = await this.provinceRepository.findById(data.id)

    if(!province) throw new RequestError("Província não encontrada.", 404)

    return province 
  }
}