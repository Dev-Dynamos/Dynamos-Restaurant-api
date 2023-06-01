import { ClientRepository } from "../repository/implement/ClientRepository";
import { CreateClientUseCase } from "../useCases/CreateClientUseCase";
import { CreateClientController } from "./CreateClientController";

const clientRepository = new ClientRepository();
const createClientUseCase = new CreateClientUseCase(clientRepository);
const createClientController = new CreateClientController(createClientUseCase);

export { createClientController };
