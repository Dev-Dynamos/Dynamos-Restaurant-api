import crypto from "crypto";

export class Product {
  readonly id: string;
  readonly nome: string;
  readonly preco: number;
  readonly descricao: string;
  readonly categoriaId: string;
  readonly ficheiroId: string;

  constructor(nome: string, idCategoria: string, preco: number,  descricao: string, ficheiroId: string) {
    this.id = crypto.randomUUID();
    this.nome = nome;
    this.preco = preco;
    this.categoriaId = idCategoria;
    this.ficheiroId = ficheiroId;
    this.descricao = descricao;
  }
}
