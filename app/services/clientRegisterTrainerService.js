import axios from "axios"



const API_URL = "http:///10.10.29.123:8080/api/clients"



export const searchTrainerByName  = async ( trainerName ) => {


   try {
     const response = await axios.get(`${API_URL}/searchTrainers?name=${trainerName}`);

      return response.data
      ;
   }catch( error ) {
     console.log( error );

   }



    

}