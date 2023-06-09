import { Router } from "express";
import { adminRoutes } from "./admin.routes";
import { clerkRoutes } from "./clerk.routes";
import { categoryRoutes } from "./category.routes";
import { productRoutes } from "./product.routes";
import { stockRoutes } from "./stock.routes";
import { clientRoutes } from "./client.routes";
import { menuRoutes } from "./menu.routes";
import { orderRoutes } from "./order.routes";
import { positionRoutes } from "./position.routes";
import { fileRoutes } from "./file.routes";
import { authenticationRoutes } from "./authenticate.routes";

const router = Router();

router.use("/admin", adminRoutes);
router.use("/clerk", clerkRoutes);
router.use("/category", categoryRoutes);
router.use("/product", productRoutes);
router.use("/position", positionRoutes);
router.use("/stock", stockRoutes);
router.use("/client", clientRoutes);
router.use("/menu", menuRoutes);
router.use("/order", orderRoutes);
router.use("/file", fileRoutes);
router.use("/auth", authenticationRoutes)

export { router };
