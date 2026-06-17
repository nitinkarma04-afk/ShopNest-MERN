 import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    productId: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    price: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    quantity: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Cart",
  cartSchema
);    


// Increase Quantity

export const increaseQuantity = async (
  req,
  res
) => {

  try {

    const { id } = req.params;

    const cartItem =
      await Cart.findByIdAndUpdate(
        id,
        {
          $inc: {
            quantity: 1,
          },
        },
        {
          new: true,
        }
      );

    res.status(200).json(cartItem);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// Decrease Quantity

export const decreaseQuantity = async (
  req,
  res
) => {

  try {

    const { id } = req.params;

    const item =
      await Cart.findById(id);

    if (item.quantity > 1) {

      item.quantity -= 1;

      await item.save();
    }

    res.status(200).json(item);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};