import { Router } from "express";
import { adminRoutes } from "./admin.routes";
import { clerkRoutes } from "./clerk.routes";

const router = Router();

router.use("/admin", adminRoutes);
router.use("/clerk", clerkRoutes);

export { router };
