import { ClerkRepository } from "../repository/implements/clerkRepository";
import { CreateClerkUseCase } from "../useCases/CreateClerkUseCase";
import { CreateClerkController } from "./CreateClerkController";

const clerkRepository = new ClerkRepository();
const createClerkUseCase = new CreateClerkUseCase(clerkRepository);
const createClerkController = new CreateClerkController(createClerkUseCase);

export { createClerkController };
