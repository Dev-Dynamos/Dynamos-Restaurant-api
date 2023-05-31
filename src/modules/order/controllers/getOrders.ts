import { OrderRepository } from "../repository/implements/OrderRepository";
import { GetOrderUseCase } from "../useCases/GetOrderUseCase";
import { GetOrderController } from "./GetOrderController";

const orderRepository = new OrderRepository();
const getOrderUseCase = new GetOrderUseCase(orderRepository);
const getOrderController = new GetOrderController(getOrderUseCase);

export { getOrderController };
