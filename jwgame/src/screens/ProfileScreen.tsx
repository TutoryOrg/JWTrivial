import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';

function ProfileScreen() {
  const ButtonContainer = styled.TouchableOpacity`
    width: 100px;
    height: 40px
    padding: 12px;
    border-radius: 10px;
    background-color: ${props => props.theme.button};
`;

  return (
    <View>
      <Text>Profile Text</Text>
      <ButtonContainer />
    </View>
  );
}

export {ProfileScreen};
