import { Router } from "express";
import { createStockController } from "../modules/stock/controllers/createStock";
import { getStockController } from "../modules/stock/controllers/getStock";
import { deleteStockController } from "../modules/stock/controllers/deleteStock";

const stockRoutes = Router();

stockRoutes.post("/", (req, res) => {
  return createStockController.handle(req, res);
});

stockRoutes.get("/", (req, res) => {
  return getStockController.handle(req, res);
});

stockRoutes.delete("/:id", (req, res) => {
  return deleteStockController.handle(req, res);
});

export { stockRoutes };
