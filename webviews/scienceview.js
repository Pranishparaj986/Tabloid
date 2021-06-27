import * as React from 'react';
import { WebView } from 'react-native-webview';

export default function scienceview(){
    return (
      <WebView
        originWhitelist={['*']}
        source={{uri:'https://www.sciencenewsforstudents.org/'}}
        style={{ marginTop: 20 }}
      />
    );
  }