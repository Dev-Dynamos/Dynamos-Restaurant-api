import { OrderRepository } from "../repository/implements/OrderRepository";
import { CreateOrderUseCase } from "../useCases/CreateOrderUseCase";
import { CreateOrderController } from "./CreateOrderController";

const orderRepository = new OrderRepository();
const createOrderUseCase = new CreateOrderUseCase(orderRepository);
const createOrderController = new CreateOrderController(createOrderUseCase);

export { createOrderController };
