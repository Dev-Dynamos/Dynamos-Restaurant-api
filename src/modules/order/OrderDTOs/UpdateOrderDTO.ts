import { OrderStatus } from "./OrderStatus";

export interface UpdateOrderDTO {
  id?: string;
  status?: OrderStatus;
  descricao?: string;
  localizacao?: string;
  clienteId?: string;
  productoId?: string;
  menuId?: string;
}
