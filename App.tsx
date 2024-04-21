import { StyleSheet, Text, View } from 'react-native';
import Location from './app/Location'

export default function App() {
  return (
    <View style={styles.container}>
      <Location />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
