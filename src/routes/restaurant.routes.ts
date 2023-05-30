import { Router } from "express";
import { createRestaurantController } from "../modules/restaurant/controllers/createRestaurant";
const restaurantRoutes = Router();

restaurantRoutes.post("/", (req, res) => {
  return createRestaurantController.handle(req, res);
});

export { restaurantRoutes };
