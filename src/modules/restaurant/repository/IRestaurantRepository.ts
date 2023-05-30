import { CreateRestaurantDTO } from "../RestaurantDTOs/CreateRestaurantDTO";
import { Restaurant } from "../model/Restaurant";

export interface IRestaurantRepository {
  create: ({
    nome,
    endereco,
    telefone,
  }: CreateRestaurantDTO) => Promise<Restaurant>;
}
