import * as React from 'react';
import {View,StyleSheet} from 'react-native';
import {Screen1} from './src/screens'

export default function App() {
  return (
    <View style={styles.container}>
      <Screen1/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
