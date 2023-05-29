import { FileRepository } from "../../repositories/implementations/FileRepository";
import { GetFileController } from "./getFileController";
import { GetFileUseCase } from "./getFileUseCase";


const fileRepository = new FileRepository()
const getFileUseCase = new GetFileUseCase(fileRepository)
const getFileController = new GetFileController(getFileUseCase)

export { getFileController }