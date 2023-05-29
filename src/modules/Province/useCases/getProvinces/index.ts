import { ProvinceRepository } from "../../repositories/implementation/ProvinceRepository";
import { GetProvincesUseCase } from "./getProvincesUseCase";
import { GetProvincesController } from "./getProvincesController";

const provinceRepository = new ProvinceRepository()
const getProvincesUseCase = new GetProvincesUseCase(provinceRepository)
const getProvincesController = new GetProvincesController(getProvincesUseCase)

export { getProvincesController }