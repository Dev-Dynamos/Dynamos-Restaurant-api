import { ClerkRepository } from "../repository/implements/ClerkRepository";
import { UpdateClerkUseCase } from "../useCases/UpdateClerkUseCase";
import { UpdateClerkController } from "./UpdateClerkController";

const clerkRepository = new ClerkRepository();
const updateClerkUseCase = new UpdateClerkUseCase(clerkRepository);
const updateClerkController = new UpdateClerkController(updateClerkUseCase);

export { updateClerkController };
