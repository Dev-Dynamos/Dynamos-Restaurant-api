import crypto from "crypto";

export class Product {
  readonly id: string;
  readonly nome: string;
  readonly preco: number;
  readonly categoriaId: string;

  constructor(nome: string, idCategoria: string, preco: number) {
    this.id = crypto.randomUUID();
    this.nome = nome;
    this.preco = preco;
    this.categoriaId = idCategoria;
  }
}
