import Cart from "../models/Cart.js";

// Add Product To Cart

export const addToCart = async (req, res) => {
  try {

    const {
      userId,
      productId,
      name,
      price,
      image,
    } = req.body;

    const cartItem = await Cart.create({
      userId,
      productId,
      name,
      price,
      image,
      quantity: 1,
    });

    res.status(201).json({
      message: "Product Added To Cart",
      cartItem,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// Get User Cart

export const getCartItems = async (req, res) => {
  try {

    const { userId } = req.params;

    const cartItems = await Cart.find({
      userId,
    });

    res.status(200).json(cartItems);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


// Remove Cart Item

export const removeCartItem = async (req, res) => {
  try {

    const { id } = req.params;

    await Cart.findByIdAndDelete(id);

    res.status(200).json({
      message: "Item Removed Successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


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

    if (
      item &&
      item.quantity > 1
    ) {

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