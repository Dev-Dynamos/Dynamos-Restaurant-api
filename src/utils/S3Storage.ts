import { AppError } from "../errors/AppError";
import aws, { S3 } from "aws-sdk";
import path from "path";
import mime from "mime";
import fs from "fs";


export class S3Storage {
    private client: S3;

    constructor() {
        this.client = new aws.S3({
            region: "us-east-1",
        });
    }

    async saveFile(filename: string): Promise<void> {
        const originalPath = path.resolve("./tmp", filename);

        const ContentType = mime.getType(originalPath);

        if (!ContentType) {
            throw new AppError("Ficheiro não encontrado !", 404);
        }

        const fileContent = await fs.promises.readFile(originalPath);

        this.client.putObject({
            Bucket: 'sares3',
            Key: filename,
            ACL: 'public-read',
            Body: fileContent,
            ContentType
        }).promise();

        await fs.promises.unlink(originalPath);
    }

    async deleteFile(filename: string) {
        this.client.deleteObject({
            Key: filename,
            Bucket: 'sares3'
        }).promise();
    }
}