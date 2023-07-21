import { AppError } from "../../../errors/AppError";
import { IClientRepository } from "../../client/repository/IClientRepository";
import { IMenuRepository } from "../../menu/repository/IMenuRepository";
import { IProductRepository } from "../../product/repository/IProductRepository";
import { CreateOrderDTO } from "../OrderDTOs/CreateOrderDTO";
import { IOrderRepository } from "../repository/IOrderRepository";

export class CreateOrderUseCase {
  constructor(
    private orderRepository: IOrderRepository,
    private clientRepository: IClientRepository,
    private productRepository: IProductRepository,
    private menuRepository: IMenuRepository
  ) { }

  async execute({
    status,
    descricao,
    localizacao,
    clienteId,
    productoId,
    menuId,
  }: CreateOrderDTO) {

    const clientExists = await this.clientRepository.findById(clienteId);

    if (!clientExists)
      throw new AppError("Cliente não encontrado !", 404);

    const productExists = productoId && await this.productRepository.findById(productoId);

    if (productoId && !productExists)
      throw new AppError("Produto não encontrado !", 404);

    const menuExists = menuId && await this.menuRepository.findById(menuId)

    if (menuId && !menuExists)
      throw new AppError("Menu não encontrado !", 404);

    const order = await this.orderRepository.create({
      descricao,
      localizacao,
      clienteId,
      productoId,
      menuId,
      status,
    });

    return order;
  }
}
