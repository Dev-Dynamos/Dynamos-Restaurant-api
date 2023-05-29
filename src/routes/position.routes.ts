import { Router } from "express";
import { createPositionController } from "../modules/position/controllers/createPosition";
const positionRoutes = Router();

positionRoutes.post("/", (req, res) => {
  return createPositionController.handle(req, res);
});

export { positionRoutes };
