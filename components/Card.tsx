import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import React from 'react';

export default function ItemCard(props: any) {

  return (
    <View style={[styles.container, props.containerStyle]}>

        <Text style={styles.title}>{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#101518',
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
