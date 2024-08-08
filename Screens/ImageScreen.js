import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';

const ImageScreen = ({ route }) => {
  const { imageUrl } = route.params;

  return (
    <View contentContainerStyle={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ImageScreen;
