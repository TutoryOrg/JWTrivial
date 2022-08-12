import React, {useState} from 'react';
import {Text} from '@components/Text';
import {scale} from '@utils/scaleFunctions';
import {colors, fontFamilies, fontSizes, gridSizes} from '@utils/constants';
import styled from 'styled-components/native';

const TouchableContainer = styled.TouchableOpacity`
    width: 90%;
    height: 12%;
    border-top-width: 2px;
    border-bottom-width: 2px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-color: ${colors.paleBlue};
    background-color: ${colors.backgroundWhite};
`;

const CircleIconContainer = styled.Image`
    width: ${scale(gridSizes.grid10x)}px;
    height: ${scale(gridSizes.grid10x)}px;
    margin-left: ${scale(gridSizes.grid3x)}px;
    border-radius: ${scale(gridSizes.grid9x)}px;
    border-width: ${scale(gridSizes.gridx)}px;
    border-color: ${colors.primaryGrey};
`;

const InfoContainer = styled.View`
    width: 55%;
    height: 100%;
    justify-content: center;
`;

const DescriptionText = styled(Text)`
    width: 100%;
    text-align: left;
    color: ${colors.primaryGrey};
    font-size: ${scale(fontSizes.xLarge)}px;
    font-family: ${fontFamilies.NunitoBold};
`;

const SubDescriptionText = styled(Text)<{
    text;
}>`
    width: 100%;
    text-align: left;
    color: ${colors.primaryGrey};
    font-size: ${scale(fontSizes.normal)}px;
`;

const DropIconContainer = styled.Image`
    width: ${scale(gridSizes.grid7x)}px;
    height: 80%;
    margin-right: ${scale(gridSizes.grid5x)}px;
`;

const DropOptionsContainer = styled.View<{
    active;
}>`
    width: 90%;
    align-items: flex-end;
    display: ${props => (props?.active ? 'flex' : 'none')};
`;

const DropTouchableOption = styled.TouchableOpacity`
    width: 80%;
    height: 50px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-bottom-width: 2px;
    padding-left: 30px;
    padding-right: 30px;
    border-color: ${colors.paleBlue};
    background-color: ${colors.backgroundWhite};
`;

const OptionText = styled(Text)`
    width: 100%;
    text-align: left;
    color: ${colors.primaryGrey};
    font-size: ${scale(fontSizes.large)}px;
    font-family: ${fontFamilies.NunitoBold};
`;

const OptionImage = styled.Image`
    width: ${scale(gridSizes.grid5x)}px;
    height: ${scale(gridSizes.grid5x)}px;
`;

interface DropOptionsProps {
    title: string;
    subTitle: string;
    iconSource: NodeRequire;
    options: {text: string; icon?: NodeRequire}[];
}

export const DropOptions = (props: DropOptionsProps): JSX.Element => {
    const {title, subTitle, iconSource, options} = props;
    const [dropIsOpen, setDropIsOpen] = useState<boolean>(false);

    const onToggleDrop = () => setDropIsOpen(!dropIsOpen);

    return (
        <>
            <TouchableContainer onPress={onToggleDrop}>
                <CircleIconContainer source={iconSource} />
                <InfoContainer>
                    <DescriptionText text={title} />
                    <SubDescriptionText text={subTitle} />
                </InfoContainer>
                <DropIconContainer
                    source={
                        dropIsOpen
                            ? require('assets/icons/down_arrow.png')
                            : require('assets/icons/line.png')
                    }
                />
            </TouchableContainer>
            <DropOptionsContainer active={dropIsOpen}>
                {options?.map((op, index) => {
                    return (
                        <DropTouchableOption key={index}>
                            <OptionText text={op.text} />
                            <OptionImage source={op?.icon} />
                        </DropTouchableOption>
                    );
                })}
            </DropOptionsContainer>
        </>
    );
};
