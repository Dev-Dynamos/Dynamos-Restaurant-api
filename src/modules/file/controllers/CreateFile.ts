import { FileRepository } from "../repositories/implements/FileRepository";
import { CreateFileController } from "./CreateFileController";
import { CreateFileUseCase } from "../useCases/CreateFileUseCase";


const fileRepository = new FileRepository();

const createFileUseCase = new CreateFileUseCase(fileRepository);
const createFileController = new CreateFileController(createFileUseCase);

export { createFileController };