import crypto from "crypto";

export class Clerk {
  readonly id: string;
  readonly name: string;
  readonly telefone: string;
  readonly email: string;

  constructor(name: string, telefone: string, email: string) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.telefone = telefone;
    this.email = email;
  }
}
