import { KinshipRepository } from "../../repositories/implementations/KinshipRepository";
import { GetKinshipsController } from "./GetKinshipsController";
import { GetKinshipsUseCase } from "./GetKinshipsUseCase";

const kinshipRepository = new KinshipRepository();
const getKinshipsUseCase = new GetKinshipsUseCase(kinshipRepository);
const getKinshipsController = new GetKinshipsController(getKinshipsUseCase);

export { getKinshipsController };