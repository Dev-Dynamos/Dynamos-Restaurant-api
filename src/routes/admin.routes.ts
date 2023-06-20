import { Router } from "express";
import { createAdminController } from "../modules/admin/controllers/createAdmin";
import { getAdminController } from "../modules/admin/controllers/getAdmin";
import { deleteAdminController } from "../modules/admin/controllers/deleteAdmin";
import { updateAdminController } from "../modules/admin/controllers/updateAdmin";

const adminRoutes = Router();

adminRoutes.post("/", (req, res) => {
  return createAdminController.handle(req, res);
});

adminRoutes.get("/", (req, res) => {
  return getAdminController.handle(req, res);
});

adminRoutes.delete("/:id", (req, res) => {
  return deleteAdminController.handle(req, res);
});

adminRoutes.put("/:id", (req, res) => {
  return updateAdminController.handle(req, res);
});

export { adminRoutes };
