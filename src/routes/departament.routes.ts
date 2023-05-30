import { Router } from "express";
import { createDepartamentController } from "../modules/departament/controllers/createDepartament";

const departamentRoutes = Router();

departamentRoutes.post("/", (req, res) => {
  return createDepartamentController.handle(req, res);
});

export { departamentRoutes };
