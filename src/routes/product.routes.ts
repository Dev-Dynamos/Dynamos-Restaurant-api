import { Router } from "express";
import { createProductController } from "../modules/product/controllers/createProduct";

const productRoutes = Router();

productRoutes.post("/", (req, res) => {
  return createProductController.handle(req, res);
});

export { productRoutes };
