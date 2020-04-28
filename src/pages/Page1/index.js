import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const Page1 = ({navigation}) => {
  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Page1Detail')}>
        <Text> Page1 </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Page1;
