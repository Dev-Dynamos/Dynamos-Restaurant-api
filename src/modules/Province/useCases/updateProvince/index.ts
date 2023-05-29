import { ProvinceRepository } from "../../repositories/implementation/ProvinceRepository";
import { UpdateProvinceUseCase } from "./updateProvinceUseCase";
import { UpdateProvinceController } from "./updateProvinceController";

const provinceRepository = new ProvinceRepository()
const updateProvinceUseCase = new UpdateProvinceUseCase(provinceRepository)
const updateProvinceController = new UpdateProvinceController(updateProvinceUseCase)

export { updateProvinceController }
