import { Router } from "express";
import { createClerkController } from "../modules/clerk/controllers/createClerk";
import { getClerksController } from "../modules/clerk/controllers/getClerks";

const clerkRoutes = Router();

clerkRoutes.post("/", (req, res) => {
  return createClerkController.handle(req, res);
});

clerkRoutes.get("/", (req, res) => {
  return getClerksController.handle(req, res);
});

export { clerkRoutes };
