import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

import HomeScreen from 'app/screens/HomeScreen';
import CrateScreen from 'app/screens/CrateScreen';
import PlaylistsScreen from 'app/screens/PlaylistsScreen';
import ProfileScreen from 'app/screens/ProfileScreen';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomSheetModalProvider>
      <BottomTab.Navigator
        initialRouteName="Home"
        tabBarOptions={{ activeTintColor: '#fff', style: { zIndex: 1 } }}
      >
        <BottomTab.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />
          }}
        />
        <BottomTab.Screen
          name="Crate"
          component={CrateNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="layers" color={color} />
            )
          }}
        />
        <BottomTab.Screen
          name="Playlists"
          component={PlaylistsNavigator}
          options={{
            // music
            tabBarIcon: ({ color }) => <TabBarIcon name="disc" color={color} />
          }}
        />
        <BottomTab.Screen
          name="Profile"
          component={ProfileNavigator}
          options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="smile" color={color} />
          }}
        />
      </BottomTab.Navigator>
    </BottomSheetModalProvider>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Feather>['name'];
  color: string;
}) {
  return <Feather size={25} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator();

function HomeNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerTitle: 'Home', animationEnabled: true }}
      />
    </HomeStack.Navigator>
  );
}

const CrateStack = createStackNavigator();

function CrateNavigator() {
  return (
    <CrateStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <CrateStack.Screen
        name="Crate"
        component={CrateScreen}
        options={{ headerTitle: 'Crate', animationEnabled: true }}
      />
    </CrateStack.Navigator>
  );
}

const PlaylistsStack = createStackNavigator();

function PlaylistsNavigator() {
  return (
    <PlaylistsStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <PlaylistsStack.Screen
        name="Playlists"
        component={PlaylistsScreen}
        options={{ headerTitle: 'Playlists', animationEnabled: true }}
      />
    </PlaylistsStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerTitle: 'Profile', animationEnabled: true }}
      />
    </ProfileStack.Navigator>
  );
}
