import { IRestaurantRepository } from "../repository/IRestaurantRepository";
import { CreateRestaurantDTO } from "../RestaurantDTOs/CreateRestaurantDTO";

export class CreateRestaurantUseCase {
  constructor(private restaurantRepository: IRestaurantRepository) {}

  async execute({ nome, endereco, telefone }: CreateRestaurantDTO) {
    const restaurant = await this.restaurantRepository.create({
      nome,
      endereco,
      telefone,
    });

    return restaurant;
  }
}
