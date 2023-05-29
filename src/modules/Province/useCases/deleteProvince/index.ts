import { ProvinceRepository } from "../../repositories/implementation/ProvinceRepository";
import { DeleteProvinceUseCase } from "./deleteProvinceUseCase";
import { DeleteProvinceController } from "./deleteProvinceController";

const provinceRepository = new ProvinceRepository()
const deleteProvinceUseCase = new DeleteProvinceUseCase(provinceRepository)
const deleteProvinceController = new DeleteProvinceController(deleteProvinceUseCase)

export { deleteProvinceController }