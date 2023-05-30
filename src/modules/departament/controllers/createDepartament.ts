import { DepartamentRepository } from "../repository/implement/DepartamentRepository";
import { CreateDepartamentUseCase } from "../useCases/CreateDepartamentUseCase";
import { CreateDepartamentController } from "./Departament";

const departamentRepository = new DepartamentRepository();
const createDepartamentUseCase = new CreateDepartamentUseCase(
  departamentRepository
);
const createDepartamentController = new CreateDepartamentController(
  createDepartamentUseCase
);

export { createDepartamentController };
