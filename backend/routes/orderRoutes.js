import express from "express";

import {
  placeOrder,
  getUserOrders,
  getAllOrders,
  updateOrderStatus,
} from "../controllers/orderController.js";

const router = express.Router();

router.post(
  "/place",
  placeOrder
);

router.get(
  "/user/:userId",
  getUserOrders
);

router.get(
  "/admin/all",
  getAllOrders
);

router.put(
  "/admin/:orderId",
  updateOrderStatus
);

export default router;