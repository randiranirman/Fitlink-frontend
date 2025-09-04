import { parse } from "@babel/core";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";


const AssignMeals =() => {
    const { client } =  useLocalSearchParams();
      const parsedClient  = client ?  JSON.parse(client ) : null
      

       useEffect(() => {
        
        
         const getParsedClient = async ()  => {

            console.log( parsedClient)

         }

         getParsedClient();
         
       },[])






    return (

        <View>

            <Text> THis is the screen for assigning meals plans </Text>
        </View>
    )

}

export default AssignMeals;