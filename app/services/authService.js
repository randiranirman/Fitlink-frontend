import axios from "axios";

const API_URL = "http://localhost:8080/api/users/all";

export const getAllUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error; // rethrow so caller knows it failed
  }
};
