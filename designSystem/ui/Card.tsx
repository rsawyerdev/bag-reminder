import { StyleSheet, View, Text, ViewStyle } from 'react-native';
import React from 'react';

interface CardProps {
  name: string;
  containerStyle: ViewStyle;
}

export default function Card({ name, containerStyle }: CardProps) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.title}>{name}</Text>
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
