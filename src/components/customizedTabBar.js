import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {vh, vw} from '../utils/dimensions';

export default class CustomizedTabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
   getImage(index){
        switch (index) {
            case 0:
                return(require('../assets/stay-at-home.png'))

                case 1:
                    return(require('../assets/ticket.png'))

                case 2: 
                return(require('../assets/bookmark.png'))

                case 3:
                    return(require('../assets/camera.png'))

                case 4:
                    return(require('../assets/speaker.png'))

        
            default:
                break;
        }  


  }

  render() {
    const {Tabs} = this.props;
    return (
      <View style={styles.container}>
        {Tabs.map(({name}, index) => {
           const img = this.getImage(index)
          if (index == 2) {
            return (
              <TouchableOpacity>
                <View style={styles.tabstyle2}>
                  <Image source={img} style={styles.elevated}  />
                </View>
              </TouchableOpacity>
            );
          } else {
            return (
              <TouchableOpacity>
                <View style={styles.tabstyle}>
                  <Image
                  source={img} 
                    style={styles.otherTabImg}
                  />
                  <Text
                    style={styles.otherTabsTxt}>
                    {name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: vh(60),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabstyle: {
    width: vw(60),
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabstyle2: {
    width: vw(60),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:vw(25),
    backgroundColor:'yellow',
    zIndex:-1
  },
  elevated: {
    backgroundColor: 'rgb(255,195,0)',
    height: vw(50),
    width: vw(50),
    borderRadius: vw(25),
    position: 'absolute',
    bottom: vh(3),
    left: vw(6),
    zIndex:-2
  },
  otherTabImg:{
    height: vw(30),
    width: vw(30),
    borderRadius: vw(14),
  },
  otherTabsTxt:{
    fontSize: vh(14),
    color: 'black',
    fontWeight: '400',
  }
});
