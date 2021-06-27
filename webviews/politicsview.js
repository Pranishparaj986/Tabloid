import * as React from 'react';
import { WebView } from 'react-native-webview';

export default function politicsview(){
    return (
      <WebView
        originWhitelist={['*']}
        source={{uri:'https://www.cnbc.com/world-politics/'}}
        style={{ marginTop: 20 }}
      />
    );
  }
