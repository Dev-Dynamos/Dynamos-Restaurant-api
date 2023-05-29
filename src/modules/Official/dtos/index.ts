import { Sexo } from "@prisma/client"

export interface OfficialDTO {
  id?: string
  nome: string
  sexo: Sexo
  contatoId?: string
  cargoId?: string
  departamentoId?: string
  numero_agente: string
}