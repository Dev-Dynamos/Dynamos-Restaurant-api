import { ClerkRepository } from "../repository/implements/ClerkRepository";
import { GetClerskUseCase } from "../useCases/GetClerksUseCase";
import { GetClerksController } from "./GetClerksController";

const clerkRepository = new ClerkRepository();
const getClerksUseCase = new GetClerskUseCase(clerkRepository);
const getClerksController = new GetClerksController(getClerksUseCase);

export { getClerksController };
