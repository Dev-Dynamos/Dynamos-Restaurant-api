import { Sexo, TipoCertificacaoEscolar, TipoIdentificacao } from "@prisma/client";

export interface ICandidateDTO {
    nome: string;
    sexo: Sexo;
    dataNasc: Date;
    contatoId?: string;
    photoUrl: string;
    tipoIdentificacao: TipoIdentificacao;
    codigoDocumento: string;
    pdfIdentificacao: string;
    tipoCertificacaoEscolar: TipoCertificacaoEscolar;
    pdfCertificacaoEscolar: string;
}

