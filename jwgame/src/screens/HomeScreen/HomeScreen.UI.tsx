import React from 'react';
import {Text} from 'components/Text';
import {Button} from 'components/Button';
import {fontSizes, gridSizes} from 'constants';
import {scale, verticalScale} from 'utils/utils';
import styled from 'styled-components/native';

export const HomeView = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: ${props => props.theme.viewBg};
`;

export const HeaderText = styled(Text)`
    font-size: ${scale(fontSizes.xxxLarge)}px;
    padding-top: ${verticalScale(gridSizes.grid9x)}px;
`;

export const SubHeaderText = styled(Text)`
    font-size: ${scale(fontSizes.normal)}px;
    padding-top: 20px;
`;

export const PlayButton = styled(Button)`
    position: absolute;
    bottom: ${verticalScale(gridSizes.grid10x)}px;
`;

export const AcceptButton = styled(Button)`
    position: absolute;
    bottom: ${verticalScale(gridSizes.grid8x)}px;
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
