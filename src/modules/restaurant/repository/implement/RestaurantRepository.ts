import { prismaClient } from "../../../../database/prismaClient";
import { CreateRestaurantDTO } from "../../RestaurantDTOs/CreateRestaurantDTO";
import { IRestaurantRepository } from "../IRestaurantRepository";

export class RestaurantRepository implements IRestaurantRepository {
  async create({ nome, endereco, telefone }: CreateRestaurantDTO) {
    const restaurant = prismaClient.restaurante.create({
      data: {
        nome,
        endereco,
        telefone,
      },
    });
    return restaurant;
  }
}
