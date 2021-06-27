import * as React from 'react';
import { WebView } from 'react-native-webview';

export default function spaceview(){
    return (
      <WebView
        originWhitelist={['*']}
        source={{uri:'https://www.skysports.com/'}}
        style={{ marginTop: 20 }}
      />
    );
  }
