import { OrderStatus } from "./OrderStatus";

export interface CreateOrderDTO {
  status: OrderStatus;
  descricao: string;
  localizacao: string;
  clienteId: string;
  productoId: string;
  menuId: string;
}
