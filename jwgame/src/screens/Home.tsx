import React from 'react';

import {Text, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go To Detail"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

export {Home};
