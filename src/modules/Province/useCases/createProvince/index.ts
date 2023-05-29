import { ProvinceRepository } from "../../repositories/implementation/ProvinceRepository";
import { CreateProvinceUseCase } from "./createProvinceUseCase";
import { CreateProvinceController } from "./createProvinceController";

const provinceRepository = new ProvinceRepository()
const createProvinceUseCase = new CreateProvinceUseCase(provinceRepository)
const createProvinceController = new CreateProvinceController(createProvinceUseCase)

export { createProvinceController }