import crypto from "crypto";

export class Admin {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly password: string;

  constructor(name: string, email: string, password: string) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
