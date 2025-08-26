import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";


const API_URL = "http://192.168.8.108:8080/api/auth";

export const registerUser = async (requestBody) => {
  try {
    const response = await axios.post(`${API_URL}/register`, requestBody);

    // Save token if available
    if (response.data?.accessToken) {
      await AsyncStorage.setItem("accessToken", response.data.accessToken);
    }

    // Check status
    if (response.status === 200) {
      router.push( '../roles/Client/clientScreens/clientDashboard');
    }

    console.log("Registered:", requestBody);
    return response.data;

  } catch (error) {
    console.log("Error registering data:", error);
    throw error;
  }
};
