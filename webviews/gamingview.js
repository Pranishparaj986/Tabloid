import * as React from 'react';
import { WebView } from 'react-native-webview';

export default function gamingview(){
    return (
      <WebView
        originWhitelist={['*']}
        source={{uri:'https://gamerant.com/gaming/'}}
        style={{ marginTop: 20 }}
      />
    );
  }