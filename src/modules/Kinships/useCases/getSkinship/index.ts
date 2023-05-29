import { KinshipRepository } from "../../repositories/implementations/KinshipRepository";
import { GetKinshipController } from "./GetKinshipController";
import { GetKinshipUseCase } from "./GetKinshipUseCase";

const kinshipRepository = new KinshipRepository();
const getKinshipUseCase = new GetKinshipUseCase(kinshipRepository);
const getKinshipController = new GetKinshipController(getKinshipUseCase);

export { getKinshipController };