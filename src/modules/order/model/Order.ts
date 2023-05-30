import crypto from "crypto";

export class Order {
  readonly id: string;
  readonly descricao: string;
  readonly localizacao: string;
  readonly idCliente: string;
  readonly idProducto: string;
  readonly idMenu: string;

  constructor(
    description: string,
    localizacao: string,
    idCliente: string,
    idProducto: string,
    idMenu: string
  ) {
    this.id = crypto.randomUUID();
    this.descricao = description;
    this.localizacao = localizacao;
    this.idCliente = idCliente;
    this.idProducto = idProducto;
    this.idMenu = idMenu;
  }
}
