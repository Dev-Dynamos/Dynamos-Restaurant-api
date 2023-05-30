import crypto from "crypto";

export class Departament {
  readonly id: string;
  readonly designacao: string;

  constructor(designacao: string) {
    this.id = crypto.randomUUID();
    this.designacao = designacao;
  }
}
