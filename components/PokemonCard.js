import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card, Image } from 'react-native-elements';

const PokemonCard = ({ name, imageUrl }) => {
  return (
    <Card containerStyle={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    marginVertical: 20,
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 25, 
  },
  image: {
    width: 200, 
    height: 200, 
    resizeMode: 'contain',
  },
});

export default PokemonCard;
