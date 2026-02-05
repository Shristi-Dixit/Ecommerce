import express from "express";
import {
  createOrder,
  getOrders,
  getOrderById,
} from "../controller/order.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

// Protected routes
router.post("/", authMiddleware, createOrder); // Create order from cart
router.get("/", authMiddleware, getOrders); // Get all orders for user
router.get("/:orderId", authMiddleware, getOrderById); // Get single order

export default router;
