import { ClerkRepository } from "../repository/implements/clerkRepository";
import { CreateOrderUseCase } from "../useCases/CreateOrderUseCase";
import { CreateClerkController } from "./CreateClerkController";

const clerkRepository = new ClerkRepository();
const createClerkUseCase = new CreateOrderUseCase(clerkRepository);
const createClerkController = new CreateClerkController(createClerkUseCase);

export { createClerkController };
