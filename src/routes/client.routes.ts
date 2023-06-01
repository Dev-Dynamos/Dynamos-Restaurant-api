import { Router } from "express";
import { createClientController } from "../modules/client/controllers/createClient";
import { getClientController } from "../modules/client/controllers/getClient";

const clientRoutes = Router();

clientRoutes.post("/", (req, res) => {
  return createClientController.handle(req, res);
});

clientRoutes.get("/", (req, res) => {
  return getClientController.handle(req, res);
});

export { clientRoutes };
