import { ClientRepository } from "../repository/implement/ClientRepository";
import { GetClientUseCase } from "../useCases/GetClerksUseCase";
import { GetClientController } from "./GetClientController";

const clientRepository = new ClientRepository();
const getCleintUseCase = new GetClientUseCase(clientRepository);
const getClientController = new GetClientController(getCleintUseCase);

export { getClientController };
