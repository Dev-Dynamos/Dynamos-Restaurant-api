import { ClerkRepository } from "../repository/implements/ClerkRepository";
import { DeleteClerkUseCase } from "../useCases/DeleteClerkUseCase";
import { DeleteClerkController } from "./DeleteCategoryController";

const clerkRepository = new ClerkRepository();
const deleteClerkUseCase = new DeleteClerkUseCase(clerkRepository);
const deleteClerkController = new DeleteClerkController(deleteClerkUseCase);

export { deleteClerkController };
