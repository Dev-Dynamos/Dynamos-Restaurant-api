import { Router } from "express";
import { adminRoutes } from "./admin.routes";
import { clerkRoutes } from "./clerk.routes";
import { positionRoutes } from "./position.routes";
import { departamentRoutes } from "./departament.routes";
import { restaurantRoutes } from "./restaurant.routes";

const router = Router();

router.use("/admin", adminRoutes);
router.use("/clerk", clerkRoutes);
router.use("/position", positionRoutes);
router.use("/departament", departamentRoutes);
router.use("/restaurant", restaurantRoutes);

export { router };
