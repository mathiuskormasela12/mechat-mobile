// ===== StackScreen
// import all modules
import React, {Fragment, useCallback, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

// import all screens
import Auth from './screens/Auth';
import EmailCode from './screens/EmailCode';
import FullName from './screens/FullName';
import Home from './screens/Home';
import ChatRoom from './screens/ChatRoom';
import Profile from './screens/Profile';

// import all component
import {Header, Wrapper, HeaderChat} from './components';
import { SafeAreaView, StyleSheet } from 'react-native';
import Login from './screens/Login';
import { StatusBar } from 'expo-status-bar';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function StackScreen() {
  const [appIsReady, setAppIsReady] = useState(false);
  const showWrapper = useSelector(
    (currentState) => currentState.loading.showWrapper,
  );

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'Geometria': require('../assets/fonts/Geometria.ttf'),
          'Geometria-Medium': require('../assets/fonts/Geometria-Medium.ttf'),
          'ProximaNova-Regular': require('../assets/fonts/ProximaNova-Regular.otf')
        });
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <Fragment>
      <StatusBar style='dark' />
    <SafeAreaView style={styles.page} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Auth' screenOptions={{
          contentStyle: {
            backgroundColor: 'white'
          }
        }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{header: () => <Header />}}
          />
          <Stack.Screen
            name="Auth"
            component={Auth}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Email Code"
            component={EmailCode}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Full Name"
            component={FullName}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Chat Room"
            component={ChatRoom}
            options={{header: () => <HeaderChat />}}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {showWrapper && <Wrapper />}
    </SafeAreaView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  }
})