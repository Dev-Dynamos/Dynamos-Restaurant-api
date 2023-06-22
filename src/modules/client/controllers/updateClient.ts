import { ClientRepository } from "../repository/implement/ClientRepository";
import { UpdateClientUseCase } from "../useCases/UpdateClientUseCase";
import { UpdateClientController } from "./UpdateClientController";

const clientRepository = new ClientRepository();
const updateClientUseCase = new UpdateClientUseCase(clientRepository);
const updateClientController = new UpdateClientController(updateClientUseCase);

export { updateClientController };
