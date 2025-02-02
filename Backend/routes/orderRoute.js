import express from "express";
import authMiddleware from "../middleware/auth.js";
import { placeOrder } from "../controllers/orderApi.js";
import { listOrders, updateStatus, userOrders, verifyOrder } from "../controllers/orderApi.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/userorder",authMiddleware, userOrders);
orderRouter.get("/list", listOrders);
orderRouter.post("/status", updateStatus);

export default orderRouter;