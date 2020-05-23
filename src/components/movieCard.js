import React from 'react';
import {  View, Text,StyleSheet,Image } from 'react-native';
import { ReviewStars } from './reviewCard';

export  function MovieCard({rowData}) { 
    return (
      <View style={styles.container}>
          <Image source={{uri:rowData.item.image}} style={styles.movieImage}/>
          <Text style={styles.lightText}>{rowData.item.type}</Text>
          {ReviewStars(rowData.item.review)}
          <Text style={styles.movieText}>{rowData.item.name}</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
      container:{
        width: 196,
        marginHorizontal: 21
      },
    movieImage: {
        height: 178,
        width: 192,
        borderRadius: 18
    },
    lightText: {
        fontSize: 14,
        fontWeight: '300',
        marginVertical: 8,
        color: 'gray'
    },
    movieText:{
        fontSize: 16,
        fontWeight: '600',
        marginTop: 12
    }
  })