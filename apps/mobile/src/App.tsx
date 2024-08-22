/// NOTE  Expo does not support pnpm because it can not read pmpn-lock.yaml,
/// See : https://docs.expo.dev/guides/monorepos/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Themes from './constants/Themes';
import Home from "./screens/Home"
import SettingsScreen from './screens/settings/Settings';
import { useFonts } from 'expo-font';
import QuizzScreen from './screens/quizz/Game';
import { store } from './configs/store';
import ScoreboardScreen from './screens/quizz/Scoreboard';


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Themes.colors.background
  },
};

export default function App() {
  const Stack = createNativeStackNavigator()

  const [loaded, error] = useFonts({
    'Lemon-Milk': require("../assets/fonts/lemon_milk/lemon_milk.otf"),
  })
  return (
    loaded && (
      <Provider store={store}>
        <NavigationContainer theme={MyTheme} >
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Quizz"
              component={QuizzScreen}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name="Scoreboard"
              component={ScoreboardScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Settings"
              component={SettingsScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider >
    )
  )
}



