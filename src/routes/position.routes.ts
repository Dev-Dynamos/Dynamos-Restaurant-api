import { Router } from "express";
import { createPositionController } from "../modules/position/controllers/createPosition";
import { getPositionController } from "../modules/position/controllers/getPosition";
import { deletePositionController } from "../modules/position/controllers/deletePosition";
const positionRoutes = Router();

positionRoutes.post("/", (req, res) => {
  return createPositionController.handle(req, res);
});

positionRoutes.get("/", (req, res) => {
  return getPositionController.handle(req, res);
});

positionRoutes.delete("/:id", (req, res) => {
  return deletePositionController.handle(req, res);
});

export { positionRoutes };
