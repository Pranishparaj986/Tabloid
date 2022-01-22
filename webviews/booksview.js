import * as React from "react";
import { WebView } from "react-native-webview";
export default function booksview() {
  return (
    <WebView
      originWhitelist={["*"]}
      source={{
        uri: "https://www.nytimes.com/topic/subject/books-and-literature",
      }}
      style={{ marginTop: 20 }}
    />
  );
}
