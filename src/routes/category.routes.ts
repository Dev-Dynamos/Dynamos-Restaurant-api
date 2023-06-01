import { Router } from "express";
import { createCategoryController } from "../modules/category/controllers/createCategory";
import { getCategoryController } from "../modules/category/controllers/getCategory";
import { deleteCategoryController } from "../modules/category/controllers/deleteCategory";

const categoryRoutes = Router();

categoryRoutes.post("/", (req, res) => {
  return createCategoryController.handle(req, res);
});

categoryRoutes.get("/", (req, res) => {
  return getCategoryController.handle(req, res);
});

categoryRoutes.delete("/:id", (req, res) => {
  return deleteCategoryController.handle(req, res);
});

export { categoryRoutes };
