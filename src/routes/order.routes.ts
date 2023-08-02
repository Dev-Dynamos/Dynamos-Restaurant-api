import { Router } from "express";
import { getOrderController } from "../modules/order/controllers/getOrders";
import { createOrderController } from "../modules/order/controllers/createOrder";
import { deleteOrderController } from "../modules/order/controllers/deleteOrder";
import { updateOrderController } from "../modules/order/controllers/updateOrder";

const orderRoutes = Router();

orderRoutes.post("/", (req, res) => {
  return createOrderController.handle(req, res);
});

orderRoutes.get("/", (req, res) => {
  return getOrderController.handle(req, res);
});

orderRoutes.delete("/:id", (req, res) => {
  return deleteOrderController.handle(req, res);
});

orderRoutes.put("/:id", (req, res) => {
  return updateOrderController.handle(req, res);
});

export { orderRoutes };
