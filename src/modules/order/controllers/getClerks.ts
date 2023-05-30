import { ClerkRepository } from "../repository/implements/clerkRepository";
import { GetOrderUseCase } from "../useCases/GetOrderUseCase";
import { GetClerksController } from "./GetClerksController";

const clerkRepository = new ClerkRepository();
const getClerksUseCase = new GetOrderUseCase(clerkRepository);
const getClerksController = new GetClerksController(getClerksUseCase);

export { getClerksController };
