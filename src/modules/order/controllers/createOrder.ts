import { ClientRepository } from "../../client/repository/implement/ClientRepository";
import { MenuRepository } from "../../menu/repository/implements/MenuRepository";
import { ProductRepository } from "../../product/repository/implement/ProductRepository";
import { OrderRepository } from "../repository/implements/OrderRepository";
import { CreateOrderUseCase } from "../useCases/CreateOrderUseCase";
import { CreateOrderController } from "./CreateOrderController";

const orderRepository = new OrderRepository();
const clientRepository = new ClientRepository();
const productRepository = new ProductRepository();
const menuRepository = new MenuRepository();

const createOrderUseCase = new CreateOrderUseCase(
    orderRepository, 
    clientRepository, 
    productRepository,
    menuRepository
);

const createOrderController = new CreateOrderController(createOrderUseCase);

export { createOrderController };
