import crypto from "crypto";

export class Menu {
  readonly id: string;
  readonly nome: string;
  readonly idProducto: string;

  constructor(name: string, idProducto: string) {
    this.id = crypto.randomUUID();
    this.nome = name;
    this.idProducto = idProducto;
  }
}