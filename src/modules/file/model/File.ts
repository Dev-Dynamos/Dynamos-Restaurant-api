import crypto from "crypto";

export class File {
    readonly id: string;
    readonly nome: string;
    readonly extensao: string;
    readonly caminho: string;

    constructor(name: string, extension: string, path: string) {
        this.id = crypto.randomUUID();
        this.nome = name;
        this.extensao = extension;
        this.caminho = path;
    }
}