import { Router } from "express";
import { createMenuController } from "../modules/menu/controllers/createMenu";
import { getMenuController } from "../modules/menu/controllers/getMenu";
import { deleteMenuController } from "../modules/menu/controllers/deleteMenu";

const menuRoutes = Router();

menuRoutes.post("/", (req, res) => {
  return createMenuController.handle(req, res);
});

menuRoutes.get("/", (req, res) => {
  return getMenuController.handle(req, res);
});

menuRoutes.delete("/:id", (req, res) => {
  return deleteMenuController.handle(req, res);
});

export { menuRoutes };
