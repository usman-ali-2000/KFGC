import { useRef, useState } from 'react';
import { Alert, StyleSheet,View } from 'react-native';
import WebView from 'react-native-webview';


export default function App() {

  const webViewRef = useRef(null);


  const onRefresh=()=>{
    if(webViewRef.current){
    webViewRef.current.reload();
    }
  }

  return (
    <View style={{height:'100%', width:'100%'}}>
    <WebView
    ref={webViewRef}
    source={{uri:'https://kfgcstaff.website/'}}
    onError={(error)=>{
      Alert.alert('error loading...', error);
      onRefresh();
    }}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height:'100%',
    width:'100%'
  },
});
