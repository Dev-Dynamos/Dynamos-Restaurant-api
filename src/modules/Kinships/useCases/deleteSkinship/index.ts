import { KinshipRepository } from "../../repositories/implementations/KinshipRepository";
import { DeleteKinshipController } from "./DeleteKinshipController";
import { DeleteKinshipUseCase } from "./DeleteKinshipUseCase";

const kinshipRepository = new KinshipRepository();
const deleteKinshipUseCase = new DeleteKinshipUseCase(kinshipRepository);
const deleteKinshipController = new DeleteKinshipController(deleteKinshipUseCase);

export { deleteKinshipController };