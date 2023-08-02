import { AppError } from "../../../errors/AppError";
import { IClientRepository } from "../../client/repository/IClientRepository";
import { IMenuRepository } from "../../menu/repository/IMenuRepository";
import { IProductRepository } from "../../product/repository/IProductRepository";
import { UpdateOrderDTO } from "../OrderDTOs/UpdateOrderDTO";
import { IOrderRepository } from "../repository/IOrderRepository";


export class UpdateOrderUseCase {
    constructor(
        private orderRepository: IOrderRepository,
        private clientRepository: IClientRepository,
        private productRepository: IProductRepository,
        private menuRepository: IMenuRepository
    ) { }

    async execute(updateDate: UpdateOrderDTO) {

        const { id, clienteId, menuId, productoId } = updateDate;

        const orderExists = id && await this.orderRepository.findById(id);

        if (!orderExists)
            throw new AppError("Pedido não encontrado !", 404);

        const clientExists = clienteId && await this.clientRepository.findById(clienteId);

        if (clienteId && !clientExists)
            throw new AppError("Cliente não encontrado !", 404);

        const productExists = productoId && await this.productRepository.findById(productoId);

        if (productoId && !productExists)
            throw new AppError("Produto não encontrado !", 404);

        const menuExists = menuId && await this.menuRepository.findById(menuId)

        if (menuId && !menuExists)
            throw new AppError("Menu não encontrado !", 404);

        const order = await this.orderRepository.update(updateDate);

        return order;
    }
}