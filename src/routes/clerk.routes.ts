import { Router } from "express";
import { createClerkController } from "../modules/clerk/controllers/createClerk";

const clerkRoutes = Router();

clerkRoutes.post("/", (req, res) => {
  return createClerkController.handle(req, res);
});

export { clerkRoutes };
