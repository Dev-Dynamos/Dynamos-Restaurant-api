import crypto from "crypto";

export class Order {
  readonly id: string;
  readonly descricao: string;
  readonly localizacao: string;
  readonly idCliente: string;
  readonly idProducto: string;
  readonly idMenu: string;
  readonly status: string;

  constructor(
    descricao: string,
    localizacao: string,
    idCliente: string,
    idProducto: string,
    idMenu: string,
    status: string
  ) {
    this.id = crypto.randomUUID();
    this.descricao = descricao;
    this.localizacao = localizacao;
    this.idCliente = idCliente;
    this.idProducto = idProducto;
    this.idMenu = idMenu;
    this.status = status;
  }
}
