import { ProvinceRepository } from "../../repositories/implementation/ProvinceRepository";

export class GetProvincesUseCase {
  constructor(private provinceRepository: ProvinceRepository){}

  async execute(){
    const provinces = await this.provinceRepository.getProvinces()

    return provinces
  }
}