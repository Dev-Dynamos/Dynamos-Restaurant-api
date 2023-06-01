import { Router } from "express";
import { createProductController } from "../modules/product/controllers/createProduct";
import { getProductController } from "../modules/product/controllers/getProduct";
import { deleteProductController } from "../modules/product/controllers/deleteProduct";

const productRoutes = Router();

productRoutes.post("/", (req, res) => {
  return createProductController.handle(req, res);
});

productRoutes.get("/", (req, res) => {
  return getProductController.handle(req, res);
});

productRoutes.delete("/:id", (req, res) => {
  return deleteProductController.handle(req, res);
});

export { productRoutes };
