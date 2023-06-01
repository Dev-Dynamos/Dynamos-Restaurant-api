import { Router } from "express";
import { createProductController } from "../modules/product/controllers/createProduct";
import { getProductController } from "../modules/product/controllers/getProduct";

const productRoutes = Router();

productRoutes.post("/", (req, res) => {
  return createProductController.handle(req, res);
});

productRoutes.get("/", (req, res) => {
  return getProductController.handle(req, res);
});

export { productRoutes };
