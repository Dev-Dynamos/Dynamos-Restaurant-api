import crypto from "crypto";

export class Stock {
  readonly id: string;
  readonly idProducto: string;
  readonly quantidade: number;

  constructor(idProducto: string, quantidade: number) {
    this.id = crypto.randomUUID();
    this.idProducto = idProducto;
    this.quantidade = quantidade;
  }
}
