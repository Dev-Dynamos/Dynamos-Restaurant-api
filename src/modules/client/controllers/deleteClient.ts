import { ClientRepository } from "../repository/implement/ClientRepository";
import { DeleteClientUseCase } from "../useCases/DeleteClientUseCase";
import { DeleteClientController } from "./DeleteClientController";

const clientRepository = new ClientRepository();
const deleteClientUseCase = new DeleteClientUseCase(clientRepository);
const deleteClientController = new DeleteClientController(deleteClientUseCase);

export { deleteClientController };
