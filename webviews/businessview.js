import * as React from 'react';
import { WebView } from 'react-native-webview';

export default function businessview(){
    return (
      <WebView
        originWhitelist={['*']}
        source={{uri:'https://www.bbc.com/news/business'}}
        style={{ marginTop: 20 }}
      />
    );
  }