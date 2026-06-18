import Wishlist from "../models/Wishlist.js";

export const addToWishlist =
  async (req, res) => {

    try {

      const {
        userId,
        productId,
        name,
        price,
        image,
      } = req.body;

      const item =
        await Wishlist.create({
          userId,
          productId,
          name,
          price,
          image,
        });

      res.status(201).json({
        message:
          "Added To Wishlist",
        item,
      });

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
};

export const getWishlist =
  async (req, res) => {

    try {

      const items =
        await Wishlist.find({
          userId:
            req.params.userId,
        });

      res.status(200).json(
        items
      );

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
};

export const removeWishlistItem =
  async (req, res) => {

    try {

      await Wishlist.findByIdAndDelete(
        req.params.id
      );

      res.status(200).json({
        message:
          "Removed",
      });

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }
};