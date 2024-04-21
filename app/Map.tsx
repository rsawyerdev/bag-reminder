import React, { StyleSheet, View, Text } from 'react-native';
import MapView from 'react-native-maps';

export default function Map(props) {

  const emptyRegion = props.region.latitude == 0;
  
  return (
    <View style={styles.container}>
      {emptyRegion ? (
        <View style={styles.textContainer}>
          <Text style={styles.emptyText}>Don't forget your bag</Text>
        </View>
      ) : (
        <MapView style={styles.map} region={props.region} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    borderWidth: 1,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyText: {
    fontSize: 20,
    color: '#101518'
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
