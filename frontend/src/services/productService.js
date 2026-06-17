import axios from "axios";

const API_URL = "http://localhost:5000/api/cart";

export const addToCart = async (cartData) => {

  const response = await axios.post(
    `${API_URL}/add`,
    cartData
  );

  return response.data;
};

export const getCartItems = async (userId) => {

  const response = await axios.get(
    `${API_URL}/${userId}`
  );

  return response.data;
};


export const removeCartItem = async (id) => {

  const response = await axios.delete(
    `${API_URL}/remove/${id}`
  );

  return response.data;
};


export const increaseQuantity = async (id) => {

  const response = await axios.put(
    `${API_URL}/increase/${id}`
  );

  return response.data;
};

export const decreaseQuantity = async (id) => {

  const response = await axios.put(
    `${API_URL}/decrease/${id}`
  );

  return response.data;
};