import { View, Text, Pressable, Animated, Dimensions, ScrollView } from "react-native";
import { useEffect, useRef, useState } from "react";
import { router } from "expo-router";
import TrainerSideBar from "../trainerComponent/trainerSideBar"




// TrainerDashboard.js - Main Dashboard Component
const TrainerDashboard = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // Hard-coded data for demonstration
  const currentClients = [
    { id: 1, name: 'Sarah Johnson', email: 'sarah@email.com', joinDate: '2024-08-15', progress: 78, status: 'active' },
    { id: 2, name: 'Mike Chen', email: 'mike@email.com', joinDate: '2024-08-10', progress: 92, status: 'active' },
    { id: 3, name: 'Emma Davis', email: 'emma@email.com', joinDate: '2024-08-20', progress: 65, status: 'active' },
    { id: 4, name: 'Alex Rivera', email: 'alex@email.com', joinDate: '2024-08-25', progress: 88, status: 'active' },
    { id: 5, name: 'Lisa Wong', email: 'lisa@email.com', joinDate: '2024-08-12', progress: 73, status: 'active' },
  ];

  const weeklyClients = [
    { id: 6, name: 'Tom Wilson', email: 'tom@email.com', joinDate: '2024-08-26' },
    { id: 7, name: 'Anna Kumar', email: 'anna@email.com', joinDate: '2024-08-24' },
    { id: 8, name: 'David Lee', email: 'david@email.com', joinDate: '2024-08-23' },
  ];

  const monthlyClients = [
    { id: 9, name: 'Grace Taylor', email: 'grace@email.com', joinDate: '2024-08-05' },
    { id: 10, name: 'Ben Martinez', email: 'ben@email.com', joinDate: '2024-08-08' },
    { id: 11, name: 'Sophie Brown', email: 'sophie@email.com', joinDate: '2024-08-03' },
    { id: 12, name: 'Ryan Clark', email: 'ryan@email.com', joinDate: '2024-08-01' },
    { id: 13, name: 'Maya Patel', email: 'maya@email.com', joinDate: '2024-08-07' },
  ];

  const renderClientCard = (client, showProgress = false) => (
    <View key={client.id} className="bg-zinc-800 p-4 rounded-xl mb-3 border border-zinc-700">
      <View className="flex-row items-center justify-between mb-2">
        <View className="flex-row items-center flex-1">
          <View className="w-12 h-12 bg-green-500 rounded-full justify-center items-center mr-3">
            <Text className="text-black font-bold text-lg">
              {client.name.split(' ').map(n => n[0]).join('')}
            </Text>
          </View>
          <View className="flex-1">
            <Text className="text-white font-semibold text-base">{client.name}</Text>
            <Text className="text-zinc-400 text-sm">{client.email}</Text>
          </View>
        </View>
        <Text className="text-zinc-500 text-xs">
          {new Date(client.joinDate).toLocaleDateString()}
        </Text>
      </View>
      
      {showProgress && (
        <View className="mt-3">
          <View className="flex-row justify-between mb-2">
            <Text className="text-zinc-400 text-sm">Progress</Text>
            <Text className="text-green-400 font-semibold text-sm">{client.progress}%</Text>
          </View>
          <View className="bg-zinc-700 rounded-full h-2">
            <View 
              className="bg-green-500 h-2 rounded-full" 
              style={{ width: `${client.progress}%` }}
            />
          </View>
        </View>
      )}
    </View>
  );

  return (
    <View className="flex-1 bg-black">
      <TrainerSideBar 
        isVisible={sidebarVisible} 
        onClose={() => setSidebarVisible(false)} 
      />
      
      {/* Header */}
      <View className="pt-14 pb-6 px-6 bg-zinc-900 border-b border-zinc-800">
        <View className="flex-row items-center justify-between">
          <Pressable onPress={() => setSidebarVisible(true)}>
            <View className="w-10 h-10 bg-zinc-800 rounded-xl justify-center items-center">
              <View className="w-5 h-5">
                <View className="w-5 h-0.5 bg-white mb-1"></View>
                <View className="w-5 h-0.5 bg-white mb-1"></View>
                <View className="w-5 h-0.5 bg-white"></View>
              </View>
            </View>
          </Pressable>
          
          <Text className="text-white text-xl font-bold">Trainer Dashboard</Text>
          
          <View className="w-10 h-10 bg-green-500 rounded-full justify-center items-center">
            <Text className="text-black font-bold">JD</Text>
          </View>
        </View>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Stats Cards */}
        <View className="px-6 py-6">
          <View className="flex-row justify-between mb-6">
            <View className="bg-zinc-900 p-4 rounded-xl flex-1 mr-2 border border-zinc-800">
              <Text className="text-green-400 text-2xl font-bold">24</Text>
              <Text className="text-zinc-400 text-sm">Total Clients</Text>
            </View>
            <View className="bg-zinc-900 p-4 rounded-xl flex-1 mx-1 border border-zinc-800">
              <Text className="text-green-400 text-2xl font-bold">3</Text>
              <Text className="text-zinc-400 text-sm">This Week</Text>
            </View>
            <View className="bg-zinc-900 p-4 rounded-xl flex-1 ml-2 border border-zinc-800">
              <Text className="text-green-400 text-2xl font-bold">5</Text>
              <Text className="text-zinc-400 text-sm">This Month</Text>
            </View>
          </View>
        </View>

        {/* Current Clients */}
        <View className="px-6 mb-8">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-white text-xl font-bold">My Clients</Text>
            <Text className="text-green-400 text-sm font-medium">View All</Text>
          </View>
          {currentClients.map(client => renderClientCard(client, true))}
        </View>

        {/* Weekly Clients */}
        <View className="px-6 mb-8">
          <Text className="text-white text-xl font-bold mb-4">Joined This Week</Text>
          {weeklyClients.map(client => renderClientCard(client))}
        </View>

        {/* Monthly Clients */}
        <View className="px-6 mb-8">
          <Text className="text-white text-xl font-bold mb-4">Joined This Month</Text>
          {monthlyClients.map(client => renderClientCard(client))}
        </View>

        {/* Bottom Padding */}
        <View className="h-20"></View>
      </ScrollView>
    </View>
  );
}
export default TrainerDashboard;