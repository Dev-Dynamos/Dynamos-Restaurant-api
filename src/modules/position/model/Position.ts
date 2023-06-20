import crypto from "crypto";

export class Position {
  readonly id: string;
  readonly nome: string;

  constructor(designacao: string) {
    this.id = crypto.randomUUID();
    this.nome = designacao;
  }
}
