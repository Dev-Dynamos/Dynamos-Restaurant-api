import { Router } from "express";
import { createPositionController } from "../modules/position/controllers/createPosition";
import { getPositionController } from "../modules/position/controllers/getPosition";
import { deletePositionController } from "../modules/position/controllers/deletePosition";
import { updatePositionController } from "../modules/position/controllers/updatePosition";
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

positionRoutes.put("/:id", (req, res) => {
  return updatePositionController.handle(req, res);
});

export { positionRoutes };
