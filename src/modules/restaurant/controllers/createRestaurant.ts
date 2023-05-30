import { RestaurantRepository } from "../repository/implement/RestaurantRepository";
import { CreateRestaurantUseCase } from "../useCases/CreateRestaurantUseCase";
import { CreateRestaurantController } from "./Restaurant";

const restaurantRepository = new RestaurantRepository();
const createRestaurantUseCase = new CreateRestaurantUseCase(
  restaurantRepository
);
const createRestaurantController = new CreateRestaurantController(
  createRestaurantUseCase
);

export { createRestaurantController };
