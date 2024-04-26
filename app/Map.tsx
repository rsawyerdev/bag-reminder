import React, { StyleSheet, View, Text } from 'react-native';
import MapView, { Region } from 'react-native-maps';

interface MapProps {
  region: Region;
};
export default function Map({ region }: MapProps) {
  const emptyRegion = region.latitude == 0;

  return (
    <View style={styles.container}>
      {emptyRegion ? (
        <View style={styles.textContainer}>
          <Text style={styles.emptyText}>Don't forget your bag</Text>
        </View>
      ) : (
        <MapView style={styles.map} region={region} />
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
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 20,
    color: '#101518',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
