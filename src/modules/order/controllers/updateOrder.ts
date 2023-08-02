import { ClientRepository } from "../../client/repository/implement/ClientRepository";
import { MenuRepository } from "../../menu/repository/implements/MenuRepository";
import { ProductRepository } from "../../product/repository/implement/ProductRepository";
import { OrderRepository } from "../repository/implements/OrderRepository";
import { UpdateOrderUseCase } from "../useCases/UpdateOrderUseCase";
import { UpdateOrderController } from "./UpdateOrderController";

const orderRepository = new OrderRepository();
const clientRepository = new ClientRepository();
const productRepository = new ProductRepository();
const menuRepository = new MenuRepository();

const updateOrderUseCase = new UpdateOrderUseCase(
    orderRepository,
    clientRepository,
    productRepository,
    menuRepository
);

const updateOrderController = new UpdateOrderController(updateOrderUseCase);

export { updateOrderController };
