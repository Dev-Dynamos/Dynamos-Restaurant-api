import {FileRepository} from "../../repositories/implementations/FileRepository"
import { CreateFileController } from "./createFileController"
import { CreateFileUseCase } from "./createFileUseCase"

const fileRepository = new FileRepository()
const createFileUseCase = new CreateFileUseCase(fileRepository)
const createFileController = new CreateFileController(createFileUseCase)

export { createFileController }