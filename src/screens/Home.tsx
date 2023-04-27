import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from '../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {User} from '../models/User';

interface Props {
  onLogout: () => void;
}

const Home = (props: Props) => {
  const {onLogout} = props;

  const [user, setUser] = useState<User>();

  useEffect(() => {
    getUserFromLocalStorage();
  }, []);

  const getUserFromLocalStorage = async () =>
    await AsyncStorage.getItem('user')
      .then(res => setUser(res ? JSON.parse(res) : undefined))
      .catch(error => console.log(error));

  return (
    <View
      style={[
        styles.container,
        {
          padding: 16,
        },
      ]}
    >
      <Text>Home Screen</Text>

      <Text>Welcome back {user?.name}</Text>

      <TouchableOpacity style={[styles.buttonContainer]} onPress={onLogout}>
        <Text
          style={[
            {
              color: 'white',
            },
          ]}
        >
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
