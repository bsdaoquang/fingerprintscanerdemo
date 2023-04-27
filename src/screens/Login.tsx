import {
  View,
  Text,
  ScrollView,
  TextInput,
  Touchable,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../styles/styles';
import {users} from '../data/users';
import {User} from '../models/User';
import AsyncStorage from '@react-native-async-storage/async-storage';
interface Props {
  onLogin: (username: string) => void;
}
const Login = (props: Props) => {
  const {onLogin} = props;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handlelogin = async () => {
    const user = users.find(
      element => element.username === username && element.password === password,
    );

    if (!user) {
      Alert.alert('Error', 'Invalid username/password, please try againt!');
    } else {
      // save username to local storage
      onLogin(user.username);

      await AsyncStorage.setItem('user', JSON.stringify(user));
    }
  };

  return (
    <ScrollView style={[{flex: 1}]}>
      <View
        style={[
          styles.container,
          {
            marginTop: Dimensions.get('window').height * 0.25,
            paddingHorizontal: 16,
          },
        ]}
      >
        <Text
          style={[
            {
              textTransform: 'uppercase',
              fontWeight: 'bold',
              fontSize: 22,
              marginBottom: 20,
            },
          ]}
        >
          Login Screen
        </Text>

        <TextInput
          placeholder="user name"
          style={[styles.input]}
          value={username}
          onChangeText={val => setUsername(val)}
        />
        <TextInput
          placeholder="password"
          style={[styles.input]}
          value={password}
          onChangeText={val => setPassword(val)}
          secureTextEntry
          autoCapitalize="none"
        />
        <TouchableOpacity
          onPress={handlelogin}
          style={[styles.buttonContainer]}
        >
          <Text
            style={[
              {
                textTransform: 'uppercase',
                color: '#fafafa',
                fontWeight: 'bold',
                fontSize: 18,
              },
            ]}
          >
            LOGIN
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;
