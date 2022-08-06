import React, {forwardRef, Ref, useImperativeHandle, useState} from 'react';
import {Text} from 'components/Text';
import {scale, verticalScale} from '@utils/scaleFunctions';
import {colors, fontFamilies, fontSizes, gridSizes} from '@utils/constants';
import styled from 'styled-components/native';

const TouchableContainer = styled.TouchableOpacity<{
    correct;
}>`
    width: 90%;
    align-items: center;
    flex-direction: row;
    background-color: ${props =>
        props.correct === true
            ? colors.green
            : props.correct === false
            ? colors.toastRed
            : colors.lightGrey};
    height: ${verticalScale(gridSizes.grid10x)}px;
    border-radius: ${scale(gridSizes.grid2x)}px;
`;

const CircleOption = styled.View<{
    selected;
}>`
    margin-left: 10px;
    height: ${scale(gridSizes.grid6x)}px;
    width: ${scale(gridSizes.grid6x)}px;
    background-color: ${props => (props?.selected ? colors.indigo : 'transparent')};
    border-radius: ${scale(gridSizes.grid5x)}px;
    border: ${scale(gridSizes.gridx)}px solid
        ${props => (props?.selected ? colors.paleBlue : colors.darkGrey)};
`;

const OptionText = styled(Text)<{
    selected;
}>`
    margin: auto;
    font-family: ${fontFamilies.NunitoBold};
    color: ${props => (props.selecNunitoBoldted ? colors.white : colors.primaryGrey)};
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

const SubDescriptionText = styled(Text)<{
    text;
}>`
    display: ${props => (props?.text === '' ? 'none' : 'flex')};
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
    isCorrectOption?: boolean;
    onPress: () => void;
}

export interface RefOptionButton {
    optionText: string;
    onCheckCorrectOption: () => void;
}

export const OptionButton = forwardRef(
    (props: OptionButtonProps, ref: Ref<RefOptionButton>): JSX.Element => {
        const {onPress, isCorrectOption, isSelected, optionText, description, subDescription} =
            props;
        const [correct, setCorrect] = useState<boolean | undefined>(undefined);

        const onCheckCorrectOption = () => {
            setCorrect(isCorrectOption);
            setTimeout(() => setCorrect(undefined), 500);
        };

        useImperativeHandle(ref, () => {
            return {optionText, onCheckCorrectOption};
        });

        return (
            <TouchableContainer onPress={onPress} correct={correct}>
                <CircleOption selected={isSelected}>
                    <OptionText selected={isSelected} text={optionText} />
                </CircleOption>
                <Description>
                    <DescriptionText text={description} />
                    <SubDescriptionText text={subDescription} />
                </Description>
            </TouchableContainer>
        );
    }
);
