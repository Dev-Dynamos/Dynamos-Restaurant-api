import { Request, Response } from "express";
import { CreateFileUseCase } from "../useCases/CreateFileUseCase";
import { S3Storage } from "../../../utils/S3Storage";

export class CreateFileController {
  constructor(private createFileUseCase: CreateFileUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {

    const { file } = request;
    const filename = file ? file.filename : "";

    const s3Storage = new S3Storage();

    await s3Storage.saveFile(filename);

    const fileCreated = await this.createFileUseCase.execute({
      nome: filename,
      extensao: filename.split('.').pop() || "",
      caminho: `${process.env.AWS_BASE_URL}${filename}`
    });

    return response.status(201).json(fileCreated);
  }
}