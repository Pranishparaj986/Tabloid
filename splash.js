import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View ,Button,Image} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

export default function splash({navigation}) {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        await new Promise(resolve => setTimeout(resolve, 0));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
      await new Promise(resolve => setTimeout(resolve, 3000))
      navigation.navigate('choose');
    }
  });

  if (!appIsReady) {
    return null;
  }

  return (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'white'}}
      onLayout={onLayoutRootView}>
      <Text>Loading..</Text>
      <View style={{alignSelf:'center'}}>
      <Image source={require('./images/icon.png')}></Image>
      </View>
    </View>
  );
}