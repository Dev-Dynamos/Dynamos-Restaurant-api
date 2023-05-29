import { RequestError } from "../../../../typeErrors/error-api";
import { OfficialDTO } from "../../dtos";
import { OfficialRepository } from "../../repositories/implementation/OfficialRepository";

export class UpdateOfficialUseCase {
  constructor(private officialRepository: OfficialRepository) { }

  async execute({ id, nome, contacto, cargoId, departamentoId, numero_agente, generoId }: OfficialDTO) {
    const officialExists = await this.officialRepository.findById(id)

    if (!officialExists) throw new RequestError("Funcionário não encontrado.", 404)

    if (!numero_agente) throw new RequestError("O numero agente inválido")
    const roleExists = await this.officialRepository.findRoleById(cargoId)

    if (!roleExists) throw new RequestError("Cargo/Função não encontrada.", 404)

    const departmentExists = await this.officialRepository.findDepartmentById(departamentoId)

    if (!departmentExists) throw new RequestError("Departamento não encontrado.", 404)

    const updatedOfficial = await this.officialRepository.update({ generoId, id, nome, contacto, cargoId, departamentoId, numero_agente })
    return updatedOfficial
  }
}