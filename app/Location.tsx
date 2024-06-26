import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';

import Card from '../components/Card';
import Map from './Map';

export default function CounterScreen() {
  const [stores, setStores] = useState<object[]>();
  const [errorMsg, setErrorMsg] = useState<string>();
  const [region, setRegion] = useState<object>({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
  });

  const [locationPermission, requestLocationPermission] =
    Location.useForegroundPermissions();

  useEffect(() => {
    if (!locationPermission?.status) requestLocationPermission();
    if (locationPermission?.status == 'denied')
      setErrorMsg(
        'You have denied permission.  Please reset location permissions & try again'
      );
  }, [locationPermission]);

  const _renderItem = ({ item, index }: { item: any; index: any }) => {
    return <Card name={item.name} containerStyle={{ marginVertical: 10 }} />;
  };

  const key = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;

  const getData = async () => {
    const currentLocation = await Location.getCurrentPositionAsync();
    const { latitude, longitude } = currentLocation.coords;
    setRegion({
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
    try {
      const { data } = await Axios.get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=grocery&location=${latitude},${longitude}&radius=5&key=${key}`
      );
      setStores(data.results);
    } catch (error: any) {
      setErrorMsg('Oops something went wrong.  Try again.');
      console.log('error message:', error.response.data);
    }
  };

  const renderPage = () => {
    return errorMsg ? (
      <Text>{errorMsg}</Text>
    ) : (
      <View>
        <Map region={region} />
        <FlatList
          data={stores}
          keyExtractor={(item, index) => `${index}`}
          renderItem={_renderItem}
          ListHeaderComponent={
            <View style={{ padding: 20 }}>
              <Text style={{ fontSize: 30, color: '#101518' }}>
                Grocery Stores nearby
              </Text>
            </View>
          }
        />

        <Button onPress={getData} title='Get nearyby grocery names' />
      </View>
    );
  };

  return <View style={styles.container}>{renderPage()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
