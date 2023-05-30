import crypto from "crypto";

export class Category {
  readonly id: string;
  readonly nome: string;

  constructor(name: string) {
    this.id = crypto.randomUUID();
    this.nome = name;
  }
}
