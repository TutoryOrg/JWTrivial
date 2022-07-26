import React from 'react';
import {Text} from 'components/Text';
import {scale, verticalScale} from '@utils/scaleFunctions';
import {colors, fontFamilies, fontSizes, gridSizes} from '@utils/constants';
import styled from 'styled-components/native';

const TouchableContainer = styled.TouchableOpacity`
    width: 90%;
    align-items: center;
    flex-direction: row;
    background-color: ${colors.backgroundGrey};
    height: ${verticalScale(gridSizes.grid10x)}px;
    border-radius: ${scale(gridSizes.grid2x)}px;
`;

const CircleOption = styled.View<{
    selected;
}>`
    margin-left: 10px;
    align-items: center;
    justify-content: center;
    height: ${scale(gridSizes.grid6x)}px;
    width: ${scale(gridSizes.grid6x)}px;
    background-color: ${props => (props?.selected ? colors.indigo : 'transparent')};
    border-radius: ${scale(gridSizes.grid5x)}px;
    border: 2px solid ${props => (props?.selected ? colors.paleBlue : colors.darkGrey)};
`;

const OptionText = styled(Text)<{
    selected;
}>`
    height: 100%;
    font-family: ${fontFamilies.NunitoBold};
    color: ${props => (props.selected ? colors.white : colors.primaryGrey)};
`;

const Description = styled.View`
    margin-left: ${scale(gridSizes.grid4x)}px;
    align-items: center;
    justify-content: center;
`;

const DescriptionText = styled(Text)`
    width: 100%;
    text-align: left;
    color: ${colors.primaryGrey};
    font-size: ${scale(fontSizes.small)}px;
    font-family: ${fontFamilies.NunitoBold};
`;

const SubDescriptionText = styled(Text)`
    width: 100%;
    text-align: left;
    color: ${colors.primaryGrey};
    font-size: ${scale(fontSizes.xSmall)}px;
    bottom: ${verticalScale(gridSizes.gridx)}px;
`;

interface OptionButtonProps {
    optionText: string;
    description: string;
    isSelected: boolean;
    subDescription: string;
    onPress: () => void;
}

export const OptionButton = (props: OptionButtonProps): JSX.Element => {
    const {onPress, isSelected, optionText, description, subDescription} = props;

    return (
        <TouchableContainer onPress={onPress}>
            <CircleOption selected={isSelected}>
                <OptionText selected={isSelected} text={optionText} />
            </CircleOption>
            <Description>
                <DescriptionText text={description} />
                <SubDescriptionText text={subDescription} />
            </Description>
        </TouchableContainer>
    );
};
