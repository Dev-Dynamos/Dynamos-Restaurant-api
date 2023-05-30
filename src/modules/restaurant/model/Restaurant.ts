import crypto from "crypto";

export class Restaurant {
  readonly id: string;
  readonly nome: string;
  readonly endereco: string;
  readonly telefone: string;

  constructor(nome: string, endereco: string, telefone: string) {
    this.id = crypto.randomUUID();
    this.nome = nome;
    this.endereco = endereco;
    this.telefone = telefone;
  }
}
