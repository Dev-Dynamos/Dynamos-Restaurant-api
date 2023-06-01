import { Router } from "express";
import { createStockController } from "../modules/stock/controllers/createStock";

const stockRoutes = Router();

stockRoutes.post("/", (req, res) => {
  return createStockController.handle(req, res);
});

export { stockRoutes };
