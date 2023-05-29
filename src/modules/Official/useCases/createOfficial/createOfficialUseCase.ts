import { IContactRepository } from "../../../../modules/Contacts/repositories/IContactRepository";
import { RequestError } from "../../../../typeErrors/error-api";
import { OfficialDTO } from "../../dtos";
import { IOfficialRepository } from "../../repositories/IOfficialRepository";

export class CreateOfficialUseCase {
  constructor(
    private officialRepository: IOfficialRepository,
    private contactRepository: IContactRepository
  ) { }

  async execute(data: OfficialDTO) {
    const isValidSex = await this.officialRepository.validateSex(data.sexo);
    if (!isValidSex) {
      throw new RequestError("Sexo Inválido", 404);
    }

    if (data.contatoId) {
      const contactExists = await this.contactRepository.findById(data.contatoId);
      if (!contactExists) {
        throw new RequestError("Contato não encontrado!", 404);
      }

      const contactAlreadyLindedToSomeOne = await this.contactRepository.isContactAlreadyLindedToSomeone(data.contatoId);
      if (contactAlreadyLindedToSomeOne) {
        throw new RequestError("Esse contato já pertence à alguém!", 400);
      }
    }

    const officialByAgentNum = await this.officialRepository.findByAgentNum(data.numero_agente)

    if (officialByAgentNum) throw new RequestError("Já existe um funcionário com esse número de agente.", 400)

    const roleExists = await this.officialRepository.findRoleById(data.cargoId)

    if (!roleExists) throw new RequestError("Cargo/Função não encontrada.", 404)

    const departmentExists = await this.officialRepository.findDepartmentById(data.departamentoId)

    if (!departmentExists) throw new RequestError("Departamento não encontrado.", 404)

    const newOfficial = await this.officialRepository.save(data)
    return newOfficial
  }
}