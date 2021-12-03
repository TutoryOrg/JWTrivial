import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Section} from '../components/Section';

const Home = ({navigation}: any) => {

  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

export {Home};
