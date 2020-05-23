import React from 'react'
import {View,Image} from 'react-native'

export const ReviewStars = (rating) => {
  
    var number_Of_filled_Star_Int_arr = []
    // var number_of_Star_Float_arr = 0.0
    var number_of_unfilled_star_arr = []
    let number_Of_filled_Star_Int = Math.floor(rating)
    let number_of_Star_Float = rating - number_Of_filled_Star_Int
  let number_of_unfilled_star = Math.floor(5 -  rating )
    // for( i = 0 ;i<=rating;i++){
    //   arr.push(i)
    // }
    var i = 0
    for (i = 0;i<number_Of_filled_Star_Int;i++){
      number_Of_filled_Star_Int_arr.push(i)
    }
  
    for(i = 0 ;i<number_of_unfilled_star;i++){
      number_of_unfilled_star_arr.push(i)
    }
  
  
    return (
      <View style={{flexDirection: 'row'}}>
        {number_Of_filled_Star_Int_arr.map(item => {
          return (
            <Image
              key={item.toString()}
              style={{width: (18), height: (26)}}
              source={require('../assets/star_full.png')}
              resizeMode="contain"
            />
          );
        })}
        {number_of_Star_Float >= 0.5 && <Image
              style={{width: (11), height: (11),alignSelf:'center',}}
              source={require('../assets/star_half.png')}
              resizeMode='contain'
            />}
            {
              number_of_unfilled_star_arr.map(item => {
                return (
                  <Image
                    key={item.toString()}
                    style={{width: (18), height: (26)}}
                    source={require('../assets/emptystar.png')}
                    resizeMode="contain"
                  />
                );
              })
  
            }
  
  
      </View>
    );
  };