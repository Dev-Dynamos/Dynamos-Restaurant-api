import { Router } from "express";
import { getOrderController } from "../modules/order/controllers/getOrders";
import { createOrderController } from "../modules/order/controllers/createOrder";

const orderRoutes = Router();

orderRoutes.post("/", (req, res) => {
  return createOrderController.handle(req, res);
});

orderRoutes.get("/", (req, res) => {
  return getOrderController.handle(req, res);
});

export { orderRoutes };
