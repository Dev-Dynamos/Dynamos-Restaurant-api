import { Router } from "express";
import { createClerkController } from "../modules/clerk/controllers/createClerk";
import { getClerksController } from "../modules/clerk/controllers/getClerks";
import { deleteClerkController } from "../modules/clerk/controllers/deleteCategory";

const clerkRoutes = Router();

clerkRoutes.post("/", (req, res) => {
  return createClerkController.handle(req, res);
});

clerkRoutes.get("/", (req, res) => {
  return getClerksController.handle(req, res);
});

clerkRoutes.delete("/:id", (req, res) => {
  return deleteClerkController.handle(req, res);
});

export { clerkRoutes };
