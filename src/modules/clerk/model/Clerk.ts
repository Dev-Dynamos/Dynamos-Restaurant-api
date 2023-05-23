import crypto from "crypto";

export class Clerk {
  readonly id: string;
  readonly name: string;

  constructor(name: string) {
    this.id = crypto.randomUUID();
    this.name = name;
  }
}
