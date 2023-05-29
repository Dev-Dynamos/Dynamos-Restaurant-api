import { TipoUsuario } from "@prisma/client";
import { RequestError } from "../../../../typeErrors/error-api";
import { UserDTO } from "../../dtos";
import { UserRepository } from "../../repositories/implementation/UserRepository";

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) { }

  async execute({ nome, email, senha, escolaId, provinciaId, tipoUsuario, fotoUrl }: UserDTO) {
    const userAlreadyExists = await this.userRepository.findByEmail(email)
    const userAlreadyHaveSchool = await this.userRepository.findSchoolById(escolaId)
    const userAlreadyHaveProvince = await this.userRepository.findProvinceById(provinciaId)

    if (!tipoUsuario.includes(TipoUsuario.ADMINISTRADOR_ESCOLA || TipoUsuario.ADMINISTRADOR_GERAL || TipoUsuario.ADMINISTRADOR_PROVINCIAL)) {
      throw new RequestError("Tipo usuario não encontrado")
    }

    if (escolaId) {
      const school = await this.userRepository.findSchool(escolaId)
      if (!school) throw new RequestError("Escola não encontrada", 404)
    }
    if (provinciaId) {
      const province = await this.userRepository.findProvince(provinciaId)
      if (!province) throw new RequestError("Provincia não encontrada", 404)
    }

    if (userAlreadyHaveSchool) throw new RequestError("Esta Escola já tem um administrator")
    if (userAlreadyHaveProvince) throw new RequestError("Esta Escola já tem um administrator")

    if (userAlreadyExists) throw new RequestError("usuario já existe", 400)


    const user = await this.userRepository.save({ nome, email, senha, escolaId, provinciaId, tipoUsuario, fotoUrl })

    return user
  }
}