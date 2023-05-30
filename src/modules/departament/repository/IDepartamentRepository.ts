import { CreateDepartamentDTO } from "../DepartamentDTOs/CreateDepartamentDTO";
import { Departament } from "../model/Departament";

export interface IDepartamentRepository {
  create: ({ designacao }: CreateDepartamentDTO) => Promise<Departament>;
}
