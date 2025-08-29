import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { jwtDecode } from "jwt-decode";

const API_URL = "http://10.10.42.111:8080/api/auth";
export const loginUser =  async ( requestBody ) => {
  try  {
    const response = await axios.post(`${API_URL}/login`, requestBody);

    if(response.status ===200) {
       router.push('../roles/Client/clientScreens/clientDashboard');


    }

    return response.data;


  }catch( error) {
    console.log( "something went  wrong " + error)

  }

}

export const registerUser = async (requestBody) => {
  try {
    const response = await axios.post(`${API_URL}/register`, requestBody);

    // Save token if available
    if (response.data?.accessToken) {
      await AsyncStorage.setItem("accessToken", response.data.accessToken);
    }

    // Check status
    if (response.status === 200) {
      router.push( '../roles/Client/clientScreens/clientDashboard.jsx');
    }

    console.log("Registered:", requestBody);
    return response.data;

  } catch (error) {
    console.log("Error registering data:", error);
    throw error;
  }
};


//  this is  the function for the decoding part 
export const jwtDecodeClaims = (token   ) =>  { 


  try  { 
       if( !token) return null ;



        const decoded = jwtDecode( token);


         return {
      id: decoded.id || null,
      role: decoded.role || null,
      name: decoded.name || null, // only works if you add "name" claim in backend
      email: decoded.sub || null, // "sub" holds username/email
    };

  }catch( error) {
    console.log( error + "failed to decode the  token ");
  }
  

}
