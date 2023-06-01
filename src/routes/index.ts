import { Router } from "express";
import { adminRoutes } from "./admin.routes";
import { clerkRoutes } from "./clerk.routes";
import { positionRoutes } from "./position.routes";
import { categoryRoutes } from "./category.routes";
import { productRoutes } from "./product.routes";
import { stockRoutes } from "./stock.routes";
import { clientRoutes } from "./client.routes";
import { menuRoutes } from "./menu.routes";
import { orderRoutes } from "./order.routes";

const router = Router();

router.use("/admin", adminRoutes);
router.use("/clerk", clerkRoutes);
router.use("/position", positionRoutes);
router.use("/category", categoryRoutes);
router.use("/product", productRoutes);
router.use("/stock", stockRoutes);
router.use("/client", clientRoutes);
router.use("/menu", menuRoutes);
router.use("/order", orderRoutes);

export { router };
