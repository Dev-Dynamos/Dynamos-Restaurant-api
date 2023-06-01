import { Router } from "express";
import { createClientController } from "../modules/client/controllers/createClient";

const clientRoutes = Router();

clientRoutes.post("/", (req, res) => {
  return createClientController.handle(req, res);
});

export { clientRoutes };
