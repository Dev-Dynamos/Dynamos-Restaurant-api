import { Candidato } from "@prisma/client";
import { IContactRepository } from "../../../Contacts/repositories/IContactRepository";
import { RequestError } from "../../../../typeErrors/error-api";
import { ICandidateDTO } from "../../dtos/CreateCandidateDTO";
import { ICandidateRepository } from "../../repositories/ICandidateRepository";

type CreateCandidateUseCaseResponse = Promise<Candidato>;

class CreateCandidateUseCase {
    constructor (
        private candidateRepository: ICandidateRepository, 
        private contactRepository: IContactRepository
    ) {}

    async execute(data: ICandidateDTO): CreateCandidateUseCaseResponse {
        const isValidSex = await this.candidateRepository.validateSex(data.sexo);
        if(!isValidSex) {
            throw new RequestError("Sexo Inválido!", 404);
        }

        const isValidIdentificationType = await this.candidateRepository.validateIdentificationType(data.tipoIdentificacao);
        if(!isValidIdentificationType) {
            throw new RequestError("Tipo de Identificacao Inválida!", 404);
        }

        const isValidSchoolCertificationType = await this.candidateRepository.validateSchoolCertificationType(data.tipoCertificacaoEscolar);

        if(!isValidSchoolCertificationType) {
            throw new RequestError("Tipo de Certificação Escolar Inválido!", 404);
        }

        const candidate = await this.candidateRepository.findByIdentificationDocument(data.codigoDocumento);
        if(candidate) {
            throw new RequestError("Já existe um candidato com essa identificação!", 400);
        }

        if(data.contatoId) {
            const contactExists = await this.contactRepository.findById(data.contatoId);
            if(!contactExists) {
              throw new RequestError("Contato não encontrado!", 404);
            }
      
            const contactAlreadyLindedToSomeOne = await this.contactRepository.isContactAlreadyLindedToSomeone(data.contatoId);
            if(contactAlreadyLindedToSomeOne) {
              throw new RequestError("Esse contato já pertence à alguém!", 400);
            }
        }

        return await this.candidateRepository.create(data);
    }
}

export { CreateCandidateUseCase };