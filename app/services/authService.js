import axios from "axios"

 const API_URL =  " http://localhost:8080/api/auth"




 export const  registerUser =  async ( requestBody ) => { 

    try  { 
      const response  = await axios.post(`${API_URL}/register` , requestBody);
      return response.data;
    }catch( error) {
      console.log( "error registering data " +  error);
      throw error;
    }

 }

// Default export for the service
const authService = {
  registerUser
};

export default authService;
