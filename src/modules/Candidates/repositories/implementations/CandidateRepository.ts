import { ICandidateDTO } from "../../dtos/CreateCandidateDTO";
import { ICandidateRepository } from "../ICandidateRepository";
import { prisma } from "../../../../prisma/client"
import { Candidato, Sexo, TipoCertificacaoEscolar, TipoIdentificacao } from "@prisma/client";

class CandidateRepository implements ICandidateRepository {
    async create(data: ICandidateDTO): Promise<Candidato> {
        console.log("you know");

        const candidate = await prisma.candidato.create({
            data: {
                nomeCompleto: data.nome,
                sexo: data.sexo,
                dataNasc: data.dataNasc,
                contatoId: data.contatoId,
                photoUrl: data.photoUrl,
                tipoIdentificacao: data.tipoIdentificacao,
                codigoDocumento: data.codigoDocumento,
                pdfIdentificacao: data.pdfIdentificacao,
                tipoCertificacaoEscolar: data.tipoCertificacaoEscolar,
                pdfCertificacaoEscolar: data.pdfCertificacaoEscolar
            },
        });

        return candidate;
    }

    async findById(id: string): Promise<Candidato> {
        const candidate = await prisma.candidato.findFirst({
            where: {
                id
            },
            include: {
                Contato: {
                    select: {
                        numeroTelefone: true,
                        email: true
                    }
                },
                Localizacao: true,
                Parentesco: true,
                Inscricao: true,
            }
        });

        return candidate;
    }

    async validateSex(sex: string): Promise<boolean> {
        if ((sex !== Sexo.M) && (sex !== Sexo.F)) {
            return false;
        }

        return true;
    }

    async validateIdentificationType(identificationType: string): Promise<boolean> {
        if ((identificationType !== TipoIdentificacao.Bilhete_de_Identidade) && (identificationType !== TipoIdentificacao.Cedula_Pessoal) && (identificationType !== TipoIdentificacao.Passaporte_Ordinario)) {
            return false;
        }

        return true;
    }

    async validateSchoolCertificationType(schoolCertifType: string): Promise<boolean> {
        if ((schoolCertifType !== TipoCertificacaoEscolar.Certificado_de_Habilitaoes) && (schoolCertifType !== TipoCertificacaoEscolar.Declaracao_com_Notas)) {
            return false;
        }

        return true;
    }

    async findByIdentificationDocument(code: string): Promise<Candidato> {
        const candidate = await prisma.candidato.findFirst({
            where: {
                codigoDocumento: code
            }
        });

        return candidate;
    }

    async findCandidateByContactId(contactId: string): Promise<Candidato> {
        const candidate = await prisma.candidato.findFirst({
            where: {
                contatoId: contactId
            }
        });

        return candidate;
    }

    async delete(id: string): Promise<Candidato> {
        return await prisma.candidato.delete({
            where: {
                id
            },
            include: {
                Contato: {
                    select: {
                        numeroTelefone: true,
                        email: true
                    }
                }
            }
        })
    }

    async list(): Promise<Candidato[]> {
        return await prisma.candidato.findMany({
            include: {
                Contato: {
                    select: {
                        numeroTelefone: true,
                        email: true
                    }
                },
                Localizacao: true,
                Parentesco: true,
                Inscricao: true
            }
        });
    }
}

export { CandidateRepository };