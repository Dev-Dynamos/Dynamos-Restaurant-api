import { Router } from "express";
import { createStockController } from "../modules/stock/controllers/createStock";
import { getStockController } from "../modules/stock/controllers/getAdmin";

const stockRoutes = Router();

stockRoutes.post("/", (req, res) => {
  return createStockController.handle(req, res);
});

stockRoutes.get("/", (req, res) => {
  return getStockController.handle(req, res);
});

export { stockRoutes };
