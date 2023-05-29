import { TipoUsuario } from "@prisma/client"
export interface UserDTO {
  nome: string;
  email: string;
  senha: string;
  fotoUrl: string;
  escolaId?: string;
  provinciaId?: string;
  tipoUsuario: TipoUsuario
}
