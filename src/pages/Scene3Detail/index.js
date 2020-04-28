import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Scene3Detail = ({route, navigation}) => {
  const {name} = route.params;
  return (
    <View style={styles.container}>
      <Text> Parametre Alındı </Text>
      <Text> name: </Text>
      <Text> {name} </Text>
    </View>
  );
};

export default Scene3Detail;
