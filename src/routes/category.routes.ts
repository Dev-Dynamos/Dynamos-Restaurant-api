import { Router } from "express";
import { createCategoryController } from "../modules/category/controllers/createCategory";
import { getCategoryController } from "../modules/category/controllers/getCategory";

const categoryRoutes = Router();

categoryRoutes.post("/", (req, res) => {
  return createCategoryController.handle(req, res);
});

categoryRoutes.get("/", (req, res) => {
  return getCategoryController.handle(req, res);
});

export { categoryRoutes };
