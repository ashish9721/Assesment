import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ReviewStars} from './reviewCard';
import {vw, vh} from '../utils/dimensions';

/**
 *
 * @param {*} rowData for showing moview element.
 */

export function MovieCard({rowData}) {
  return (
    <View style={styles.container}>
      <Image source={{uri: rowData.item.image}} style={styles.movieImage} />
      <Text style={styles.lightText}>{rowData.item.type}</Text>
      {ReviewStars(rowData.item.review)}
      <Text style={styles.movieText}>{rowData.item.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: vw(196),
    marginHorizontal: vw(5),
  },
  movieImage: {
    height: vh(130),
    width: vw(170),
    borderRadius: vw(18),
  },
  lightText: {
    fontSize: vw(14),
    fontWeight: '300',
    marginVertical: vh(5),
    color: 'gray',
  },
  movieText: {
    fontSize: vw(16),
    fontWeight: '600',
    marginTop: vh(10),
  },
});
