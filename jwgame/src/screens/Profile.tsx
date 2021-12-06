import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';

const Profile = () => {
  const ButtonContainer = styled.TouchableOpacity`
    width: 100px;
    height: 40px
    padding: 12px;
    border-radius: 10px;
    background-color: blue
`;

  return (
    <View>
      <Text>Profile Text</Text>
      <ButtonContainer />
    </View>
  );
};

export {Profile};
