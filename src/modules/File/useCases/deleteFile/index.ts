import { FileRepository } from "../../repositories/implementations/FileRepository"
import { DeleteFileController } from "./deleteFileController"
import { DeleteFileUseCase } from "./deleteFileUseCase"

const fileRepository = new FileRepository()
const deleteFileUseCase = new DeleteFileUseCase(fileRepository)
const deleteFileController = new DeleteFileController(deleteFileUseCase)

export { deleteFileController }