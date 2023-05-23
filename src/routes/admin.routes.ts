import { Router } from "express";
import { createAdminController } from "../modules/admin/controllers/createAdmin";

const adminRoutes = Router();

adminRoutes.post("/", (req, res) => {
  return createAdminController.handle(req, res);
});

export { adminRoutes };
