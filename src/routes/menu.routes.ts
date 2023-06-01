import { Router } from "express";
import { createMenuController } from "../modules/menu/controllers/createMenu";
import { getMenuController } from "../modules/menu/controllers/getMenu";

const menuRoutes = Router();

menuRoutes.post("/", (req, res) => {
  return createMenuController.handle(req, res);
});

menuRoutes.get("/", (req, res) => {
  return getMenuController.handle(req, res);
});

export { menuRoutes };
