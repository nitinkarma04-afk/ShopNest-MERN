import express from "express";

import {
  addToCart,
  getCartItems,
  removeCartItem,
  increaseQuantity,
  decreaseQuantity,
} from "../controllers/cartController.js";
const router = express.Router();

router.post(
  "/add",
  addToCart
);

 
router.get(
  "/:userId",
  getCartItems
);

router.delete(
  "/remove/:id",
  removeCartItem
);
router.put(
  "/increase/:id",
  increaseQuantity
);

router.put(
  "/decrease/:id",
  decreaseQuantity
);

export default router;