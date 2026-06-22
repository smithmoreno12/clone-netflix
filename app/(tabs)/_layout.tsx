import { image23 } from '@/core/constants/assets';
import { ComputerVideoIcon, Home01Icon } from '@/core/constants/svg';
import { Tabs } from 'expo-router';
import { Image } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#000000',
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          paddingHorizontal: 10,
        },
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#8C8C8C',
        tabBarShowLabel: true,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({ color, size = 30 }) => (
            <Home01Icon width={size} height={size} stroke={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="new"
        options={{
          headerShown: false,
          title: 'New & Hot',
          tabBarIcon: ({ color, size = 30 }) => (
            <ComputerVideoIcon width={size} height={size} stroke={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: 'My netflix',
          tabBarIcon: ({ color, size }) => (
            <Image source={image23} style={{ height: 30, width: 30 }} />
          ),
        }}
      />
    </Tabs>
  );
}
