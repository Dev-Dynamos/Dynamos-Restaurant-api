import crypto from "crypto";

export class Client {
  readonly id: string;
  readonly nome: string;
  readonly email: string;
  readonly password: string;
  readonly telefone: string;

  constructor(name: string, email: string, password: string, telefone: string) {
    this.id = crypto.randomUUID();
    this.nome = name;
    this.email = email;
    this.password = password;
    this.telefone = telefone;
  }
}
