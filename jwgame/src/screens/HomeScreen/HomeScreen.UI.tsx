import React from 'react';
import {Text} from 'components/Text';
import {Button} from 'components/Button';
import {fontSizes} from 'constants';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const windowHeight = Dimensions.get('window').height;

export const HomeView = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: ${props => props.theme.viewBg};
`;

export const HeaderText = styled(Text)`
    font-size: ${windowHeight < 700 ? fontSizes.xxxLarge : 50}px;
    padding-top: 100px;
`;

export const SubHeaderText = styled(Text)`
    font-size: ${windowHeight < 700 ? fontSizes.xLarge : 25}px;
    padding-top: 20px;
`;

export const PlayButton = styled(Button)`
    position: absolute;
    bottom: 130px;
`;

export const AcceptButton = styled(Button)`
    position: absolute;
    bottom: 50px;
`;

type TProfileButton = {
    onPress: () => void;
};

export const ProfileButton = ({onPress}: TProfileButton): JSX.Element => {
    const UserIcon = styled.Image`
        width: 40px;
        height: 40px;
    `;
    const ContainerTouchable = styled.TouchableOpacity`
        position: absolute;
        top: 10px;
        right: 10px;
    `;
    return (
        <ContainerTouchable onPress={onPress}>
            <UserIcon source={require('../../assets/icons/userIcon_250.png')} />
        </ContainerTouchable>
    );
};
