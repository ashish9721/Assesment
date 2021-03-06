import React, {PureComponent} from 'react';
import {View, Text, Animated, StyleSheet, SafeAreaView} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {vw, vh, DesignWidth} from '../utils/dimensions';
import * as shape from 'd3-shape';
import CustomizedTabBar from './customizedTabBar';
const Tabs = [
  {name: 'Home'},
  {name: 'Ticket'},
  {name: 'Elevated'},
  {name: 'Movie'},
  {name: 'Cinema'},
];

const tabWidth = vw(DesignWidth / Tabs.length);

/**
 * curve design for left part of the design curve
 */

const left = shape
  .line()
  .x(d => d.x)
  .y(d => d.y)([{x: 0, y: 0}, {x: vw(DesignWidth), y: 0}]);

/**
 * curve design for Right part of the design curve
 */
const right = shape
  .line()
  .x(d => d.x)
  .y(d => d.y)([
  {x: vw(DesignWidth + tabWidth), y: 0},
  {x: vw(DesignWidth + DesignWidth), y: 0},
  {x: vw(DesignWidth + DesignWidth), y: vh(60)},
  {x: 0, y: vh(60)},
  {x: 0, y: 0},
]);
/**
 * curve design for bottom part of the design curve
 */
const tab = shape
  .line()
  .x(d => d.x)
  .y(d => d.y)
  .curve(shape.curveBasis)([
  {x: vw(DesignWidth), y: 0},
  {x: vw(DesignWidth + vw(5)), y: 0},
  {x: vw(DesignWidth + vw(10)), y: vh(10)},
  {x: vw(DesignWidth + vw(15)), y: vh(50)},
  {x: vw(DesignWidth + tabWidth - vw(15)), y: vh(50)},
  {x: vw(DesignWidth + tabWidth - vw(10)), y: vh(10)},
  {x: vw(DesignWidth + tabWidth - vw(5)), y: 0},
  {x: vw(DesignWidth + tabWidth), y: 0},
]);

const d = `${left} ${tab} ${right}`;

/**
 * Tabbar is a simple SVG curve function which consisit of the curve specified in the
 * design and also the other bottom tabs.
 * Here the curve is drawn using the SVG path property.
 */
export default class Tabbar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <View style={styles.container}>
          <Svg
            width={vw(2 * DesignWidth)}
            height={vh(60)}
            opacity={0.1}
            style={styles.svg}>
            <Path {...{d}} fill="rgba(0,0,0,0.9)" />
          </Svg>
          <View style={styles.customTabcontainer}>
            <CustomizedTabBar {...{Tabs}} />
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {width: vw(DesignWidth), height: vh(60)},
  safeArea: {
    backgroundColor: 'pink',
  },
  customTabcontainer: {
    position: 'absolute',
    width: vw(DesignWidth),
    height: vh(60),
  },
  svg: {
    /**
     * if we want to achieve animated effect of the curve ,animate this transform value
     */
    transform: [{translateX: -250}],
    backgroundColor: 'rgba(236,236,239,0.7)',
  },
});
