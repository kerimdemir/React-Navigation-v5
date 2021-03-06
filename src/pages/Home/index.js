import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';
import Divider from '../../components/Divider';
import {fetchUsers} from '../../store/actions/user.actions';

const Home = ({users: {users}, fetchUsers}) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  function Item({name}) {
    return <Text style={styles.title}>{name}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text> Movies </Text>
      <Divider />
      <FlatList
        data={users}
        renderItem={({item, index}) => <Item name={item.title} />}
      />
    </View>
  );
};

const mapStateToProps = ({users}) => ({users});
export default connect(mapStateToProps, {fetchUsers})(Home);
