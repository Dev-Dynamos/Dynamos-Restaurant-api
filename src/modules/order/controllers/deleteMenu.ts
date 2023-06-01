import { OrderRepository } from "../repository/implements/OrderRepository";
import { DeleteOrderUseCase } from "../useCases/DeleteOrderUseCase";
import { DeleteOrderController } from "./DeleteMenuController";

const orderRepository = new OrderRepository();
const deleteOrderUseCase = new DeleteOrderUseCase(orderRepository);
const deleteOrderController = new DeleteOrderController(deleteOrderUseCase);

export { deleteOrderController };
