 import axios from "axios";

const API_URL =
  "http://localhost:5000/api/orders";

export const getUserOrders = async (
  userId
) => {

  const response =
    await axios.get(
      `${API_URL}/user/${userId}`
    );

  return response.data;
};

export const placeOrder = async (
  userId
) => {

  const response =
    await axios.post(
      `${API_URL}/place`,
      {
        userId,
      }
    );

  return response.data;
};

export const getAllOrders =
  async () => {

    const response =
      await axios.get(
        `${API_URL}/admin/all`
      );

    return response.data;
};

export const updateOrderStatus =
  async (
    orderId,
    status
  ) => {

    const response =
      await axios.put(
        `${API_URL}/admin/${orderId}`,
        { status }
      );

    return response.data;
};