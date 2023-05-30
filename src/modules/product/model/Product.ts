import crypto from "crypto";

export class Product {
  readonly id: string;
  readonly nome: string;
  readonly descricao: string;
  readonly preco: number;

  constructor(nome: string, descricao: string, preco: number) {
    this.id = crypto.randomUUID();
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
  }
}
