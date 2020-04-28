import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const Scene3 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Scene3Detail', {
            name: 'Kerim Demir',
          })
        }>
        <Text> Scene3 Detail </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Scene3;
