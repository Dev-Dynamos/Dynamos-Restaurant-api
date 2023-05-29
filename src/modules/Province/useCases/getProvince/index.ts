import { ProvinceRepository } from "../../repositories/implementation/ProvinceRepository";
import { GetProvinceUseCase } from "./getProvinceUseCase";
import { GetProvinceController } from "./getProvinceController";

const provinceRepository = new ProvinceRepository()
const getProvinceUseCase = new GetProvinceUseCase(provinceRepository)
const getProvinceController = new GetProvinceController(getProvinceUseCase)

export { getProvinceController }