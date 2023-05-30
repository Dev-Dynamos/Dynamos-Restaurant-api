import { prismaClient } from "../../../../database/prismaClient";
import { CreateDepartamentDTO } from "../../DepartamentDTOs/CreateDepartamentDTO";
import { IDepartamentRepository } from "../IDepartamentRepository";

export class DepartamentRepository implements IDepartamentRepository {
  async create({ designacao }: CreateDepartamentDTO) {
    const departament = prismaClient.departamento.create({
      data: {
        designacao,
      },
    });
    return departament;
  }
}
