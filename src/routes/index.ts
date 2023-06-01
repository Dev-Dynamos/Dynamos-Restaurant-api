import { Router } from "express";
import { adminRoutes } from "./admin.routes";
import { clerkRoutes } from "./clerk.routes";
import { positionRoutes } from "./position.routes";
import { categoryRoutes } from "./category.routes";
import { productRoutes } from "./product.routes";

const router = Router();

router.use("/admin", adminRoutes);
router.use("/clerk", clerkRoutes);
router.use("/position", positionRoutes);
router.use("/category", categoryRoutes);
router.use("/product", productRoutes);

export { router };
