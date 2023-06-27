import { Router } from "express";
import { createClientController } from "../modules/client/controllers/createClient";
import { getClientController } from "../modules/client/controllers/getClient";
import { deleteClientController } from "../modules/client/controllers/deleteClient";
import { updateClientController } from "../modules/client/controllers/updateClient";

const clientRoutes = Router();

clientRoutes.post("/", (req, res) => {
  return createClientController.handle(req, res);
});

clientRoutes.get("/", (req, res) => {
  return getClientController.handle(req, res);
});

clientRoutes.delete("/:id", (req, res) => {
  return deleteClientController.handle(req, res);
});

clientRoutes.put("/:id", (req, res) => {
  return updateClientController.handle(req, res);
});

export { clientRoutes };
