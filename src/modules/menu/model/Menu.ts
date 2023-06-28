import crypto from "crypto";

export class Menu {
  readonly id: string;
  readonly nome: string;
  readonly preco: number;

  constructor(name: string, preco: number) {
    this.id = crypto.randomUUID();
    this.nome = name;
    this.preco = preco;
  }
}
