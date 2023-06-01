import { Router } from "express";
import { createAdminController } from "../modules/admin/controllers/createAdmin";
import { getAdminController } from "../modules/admin/controllers/getAdmin";

const adminRoutes = Router();

adminRoutes.post("/", (req, res) => {
  return createAdminController.handle(req, res);
});

adminRoutes.get("/", (req, res) => {
  return getAdminController.handle(req, res);
});

export { adminRoutes };
