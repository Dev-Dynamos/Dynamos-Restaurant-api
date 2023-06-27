import crypto from "crypto";

export class Stock {
  readonly id: string;
  readonly productoId: string;
  readonly quantidade: number;

  constructor(idProducto: string, quantidade: number) {
    this.id = crypto.randomUUID();
    this.productoId = idProducto;
    this.quantidade = quantidade;
  }
}
