import { CreateOrderDTO } from "../OrderDTOs/CreateOrderDTO";
import { Order } from "../model/Order";

export interface IClerkRepository {
  create({ name, email, telefone, cargiId }: CreateOrderDTO): Promise<Order>;
  get(): Promise<Order[]>;
}
