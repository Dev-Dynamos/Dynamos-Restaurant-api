import { OrderRepository } from "../repository/implements/OrderRepository";
import { CreateOrderUseCase } from "../useCases/CreateOrderUseCase";
import { CreateOrderController } from "./CreateOrderController";

const clerkRepository = new OrderRepository();
const createClerkUseCase = new CreateOrderUseCase(clerkRepository);
const createClerkController = new CreateOrderController(createClerkUseCase);

export { createClerkController };
