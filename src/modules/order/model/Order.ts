import crypto from "crypto";

export class Order {
  readonly id: string;
  readonly descricao: string;
  readonly localizacao: string;
  readonly clienteId: string;
  readonly productoId: string;
  readonly menuId: string;
  readonly status: string;

  constructor(
    status: string,
    descricao: string,
    localizacao: string,
    clienteId: string,
    productoId: string,
    menuId: string
  ) {
    this.id = crypto.randomUUID();
    this.status = status;
    this.descricao = descricao;
    this.localizacao = localizacao;
    this.clienteId = clienteId;
    this.productoId = productoId;
    this.menuId = menuId;
  }
}
