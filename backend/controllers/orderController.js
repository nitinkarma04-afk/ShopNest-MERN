import Order from "../models/Order.js";
import Cart from "../models/Cart.js";

export const placeOrder = async (
  req,
  res
) => {

  try {

    const { userId } = req.body;

    const cartItems =
      await Cart.find({
        userId,
      });

    if (
      cartItems.length === 0
    ) {
      return res.status(400).json({
        message:
          "Cart is empty",
      });
    }

   const totalAmount =
  cartItems.reduce(
    (acc, item) =>
      acc +
      (
        Number(
          item.price
            .toString()
            .replace("₹", "")
            .replaceAll(",", "")
        ) *
        item.quantity
      ),
    0
  );

    const order =
      await Order.create({
        userId,
        items: cartItems,
        totalAmount,
      });

    await Cart.deleteMany({
      userId,
    });

    res.status(201).json({
      message:
        "Order Placed Successfully",
      order,
    });

  } catch (error) {

    res.status(500).json({
      message:
        error.message,
    });

  }
};


export const getUserOrders = async (
  req,
  res
) => {

  try {

    const { userId } = req.params;

    const orders = await Order.find({
      userId,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json(
      orders
    );

  } catch (error) {

    res.status(500).json({
      message:
        error.message,
    });

  }
};

// ================= ADMIN =================

export const getAllOrders = async (
  req,
  res
) => {
  try {

    const orders = await Order.find()
      .sort({
        createdAt: -1,
      });

    res.status(200).json(
      orders
    );

  } catch (error) {

    res.status(500).json({
      message:
        error.message,
    });

  }
};

export const updateOrderStatus = async (
  req,
  res
) => {

  try {

    const { orderId } =
      req.params;

    const { status } =
      req.body;

    const order =
      await Order.findByIdAndUpdate(
        orderId,
        { status },
        { new: true }
      );

    res.status(200).json({
      message:
        "Status Updated",
      order,
    });

  } catch (error) {

    res.status(500).json({
      message:
        error.message,
    });

  }
};