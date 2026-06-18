import axios from "axios";

const API_URL =
  "http://localhost:5000/api/wishlist";

export const addToWishlist =
  async (wishlistData) => {

    const response =
      await axios.post(
        `${API_URL}/add`,
        wishlistData
      );

    return response.data;
};

export const getWishlist =
  async (userId) => {

    const response =
      await axios.get(
        `${API_URL}/${userId}`
      );

    return response.data;
};

export const removeWishlistItem =
  async (id) => {

    const response =
      await axios.delete(
        `${API_URL}/remove/${id}`
      );

    return response.data;
};