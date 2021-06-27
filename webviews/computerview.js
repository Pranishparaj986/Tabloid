import * as React from 'react';
import { WebView } from 'react-native-webview';

export default function computerview(){
    return (
      <WebView
        originWhitelist={['*']}
        source={{uri:'https://www.cnet.com/news/'}}
        style={{ marginTop: 20 }}
      />
    );
  }