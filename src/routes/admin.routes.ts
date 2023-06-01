import { Router } from "express";
import { createAdminController } from "../modules/admin/controllers/createAdmin";
import { getAdminController } from "../modules/admin/controllers/getAdmin";
import { deleteAdminController } from "../modules/admin/controllers/deleteAdmin";

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

export { adminRoutes };
