import React from 'react';
import {View, Text, TextInput,StyleSheet, Platform} from 'react-native';
import Svg, {
  Image,
  ClipPath,
  Circle,
  Rect,
  LinearGradient,
  Stop,
  Defs,
  Ellipse,
} from 'react-native-svg';
import {vh, vw, DesignHeight, DesignWidth} from '../utils/dimensions';

export function Header() {
  return (
    <View >
      <Svg height={vh(160)} width="100%" backgroundColor={'black'}>
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
            <Stop offset="0" stopColor="rgb(255,218,0)" stopOpacity="1" />
            <Stop offset="1" stopColor="rgb(255,139,0)" stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <Ellipse
          cx={vw(DesignWidth / 2)}
          cy={vh(0)}
          rx={Platform.OS === 'ios' ? vh(380) : vh(420)}
          ry={vh(160)}
          fill="url(#grad)"
        />
      </Svg>
    </View>
  );
}


