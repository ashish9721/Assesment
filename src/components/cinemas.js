import React from 'react';
import {Text, View, StyleSheet, Image, FlatList} from 'react-native';
import {vh, vw} from '../utils/dimensions';

/**
 * Cinemas function for showing a list of a cinemas in Flatlist,
 * Wherever we call it ,it renders the list of cinemas.
 * We just need to pass name,id and image url as a dataForm.
 */

export function Cinemas() {
  function CinemaCard(rowData) {
    const {item} = rowData;
    return (
      <View style={styles.cinemaCardContainer}>
        <Image style={styles.cinemaImg} source={{uri: item.image}} />
        <Text numberOfLines={2} style={styles.cinemaTxt}>
          {item.name}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.CinemaTxt}>Cinemas around your area</Text>
      <FlatList
        data={CinemaData}
        horizontal={true}
        keyExtractor={item => item.id.toString()}
        renderItem={CinemaCard}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const CinemaData = [
  {
    name: 'IOI CITY MALL',
    id: '0',
    image:
      'https://tse1.mm.bing.net/th?id=OIP.84Ex24Shok0NUmEYdwDR0QHaD3&pid=Api',
  },
  {
    name: 'PAVILLION',
    id: '1',
    image:
      'https://tse1.mm.bing.net/th?id=OIP.dDmLK8vLYZPrZGHsrjxCjwAAAA&pid=Api',
  },
  {
    name: 'NU SENTRAL',
    id: '2',
    image:
      'https://tse1.mm.bing.net/th?id=OIP.84Ex24Shok0NUmEYdwDR0QHaD3&pid=Api',
  },
];

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // height: vh(200),
    backgroundColor: 'white',
    marginTop: vh(10),
  },
  CinemaTxt: {fontSize: vw(18), fontWeight: '800', color: 'gray'},
  cinemaImg: {
    width: vw(110),
    height: vh(70),
    backgroundColor: 'lightblue',
    borderRadius: vw(20),
  },
  cinemaTxt: {
    width: vw(75),
    textAlign: 'center',
    position: 'absolute',
    top: vh(28),
    left: vw(15),
    color: 'white',
    fontSize: vw(12),
    fontWeight: '900',
    // backgroundColor:'gray'
  },
  cinemaCardContainer: {marginHorizontal: vw(5), marginVertical: vh(10)},
});
