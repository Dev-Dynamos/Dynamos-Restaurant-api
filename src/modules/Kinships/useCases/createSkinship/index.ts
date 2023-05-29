import { CreateKinshipController } from "./CreateKinshipController";
import { CreateKinshipUseCase } from "./CreateKinshipUseCase";
import { KinshipRepository } from "../../repositories/implementations/KinshipRepository";

const kinshipRepository = new KinshipRepository();
const createKinshipUseCase = new CreateKinshipUseCase(kinshipRepository);
const createKinshipController = new CreateKinshipController(createKinshipUseCase);

export { createKinshipController };