 import express from "express";

import {
  addToWishlist,
  getWishlist,
  removeWishlistItem,
} from "../controllers/wishlistController.js";

const router =
  express.Router();

router.post(
  "/add",
  addToWishlist
);

router.get(
  "/:userId",
  getWishlist
);

router.delete(
  "/remove/:id",
  removeWishlistItem
);

export default router;