import crypto from "crypto";

export class File {
    private readonly id: string;
    private readonly nome: string;
    private readonly extensao: string;
    private readonly caminho: string;

    constructor(name: string, extension: string, path: string) {
        this.id = crypto.randomUUID();
        this.nome = name;
        this.extensao = extension;
        this.caminho = path;
    }
}