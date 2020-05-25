import * as React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
// Custom Imports
import {Header, Cinemas, MovieCard} from '../components';
import {vh, vw} from '../utils/dimensions';
import Tabbar from '../components/tabbar';

export function Screen1() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={{...styles.searchContainer, top: vh(40)}}>
        <View style={styles.userCardView}>
          <TouchableOpacity>
            <Image
              source={require('../assets/MenuInactiveIcon.png')}
              style={styles.moreImge}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.userImage} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchView}>
          <Image
            source={require('../assets/Searchicon.png')}
            style={styles.searchImg}
            resizeMode="contain"
          />
          <TextInput
            placeholder="Search Movie Title..."
            style={styles.searchInput}
          />
        </View>
      </View>
      <ScrollView
        style={styles.scrollview}
        showsVerticalScrollIndicator={false}>
        <Cinemas />
        <>
          <Text style={styles.cardHeading}>New Releases</Text>

          <FlatList
            data={movies}
            keyExtractor={item => item.id}
            style={{paddingVertical: vh(10)}}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={rowData => <MovieCard rowData={rowData} />}
          />
        </>
        <>
          <Text style={styles.cardHeading}>You Might Want To See This</Text>

          <FlatList
            data={movies}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={rowData => <MovieCard rowData={rowData} />}
          />
        </>
      </ScrollView>
      <View style={{alignSelf: 'flex-end'}}>
        <Tabbar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
  },
  userCardView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchContainer: {
    paddingHorizontal: vw(20),
    position: 'absolute',
    top: vh(130),
    left: vw(0),
    right: vw(0),
  },
  moreImge: {width: vw(25), height: vw(20)},
  userImage: {
    width: vw(36),
    height: vw(36),
    backgroundColor: 'gray',
    borderRadius: vw(18),
  },
  searchView: {
    width: '100%',
    height: Platform.OS === 'ios' ? vh(35) : vh(40),
    backgroundColor: 'white',
    borderRadius: vw(20),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: vw(10),
    shadowOpacity: {width: vw(1), height: vw(1)},
    shadowColor: 'lightgray',
    shadowOpacity: 0.8,
    shadowRadius: vw(10),
    elevation: 7,
  },
  searchImg: {height: vw(20), width: vw(20)},
  searchInput: {flex: 1, marginHorizontal: vw(15), fontSize: vw(16)},
  cardHeading: {
    fontSize: 18,
    fontWeight: '700',
    marginVertical: vh(10),
    alignSelf: 'flex-start',
    marginLeft: vw(15),
  },
  scrollview: {paddingHorizontal: vw(20), height: vh(300)},
});

const movies = [
  {
    id: '1',
    name: 'Blade Runner Future',
    type: 'Action Movie',
    review: 4,
    image:
      'https://tse1.mm.bing.net/th?id=OIP.4KkBJLj0-_nGCblVAzlA2AHaLH&pid=Api',
  },
  {
    id: '2',
    name: 'Captain America Civil War',
    type: 'Action Movie',
    review: 4,
    image:
      'https://tse1.mm.bing.net/th?id=OIP.e8k9x9aCBremYq1FiFGe3AHaEK&pid=Api',
  },
  {
    id: '3',
    name: 'Beauty and the beast',
    type: 'Drama Movie',
    review: 3,
    image:
      'https://tse1.mm.bing.net/th?id=OIP.xUTZDMr5JRI804C4LBxs_AHaJ3&pid=Api',
  },
  {
    id: '4',
    name: 'Fast & Furious',
    type: 'Action Movie',
    review: 4,
    image:
      'https://tse1.mm.bing.net/th?id=OIP.84Ex24Shok0NUmEYdwDR0QHaD3&pid=Api',
  },
  {
    id: '5',
    name: 'The Dark Knight',
    type: 'Action Movie',
    review: 5,
    image:
      'https://tse1.mm.bing.net/th?id=OIP.dDmLK8vLYZPrZGHsrjxCjwAAAA&pid=Api',
  },
];
