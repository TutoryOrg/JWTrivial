import React from 'react';
import {Screens} from 'navigation/constants';
import {useTranslation} from 'react-i18next';
import {MainStackParamList} from 'navigation/MainNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
    MenuOptionButton,
    HeaderText,
    MenuContainer,
    SafeViewBg,
    HeaderContainer,
    MenuOptions,
} from './MenuScreen.UI';

type MenuScreenProps = NativeStackScreenProps<MainStackParamList>;

export function MenuScreen({navigation}: MenuScreenProps): JSX.Element {
    const {t} = useTranslation();

    return (
        <SafeViewBg>
            <HeaderContainer>
                <HeaderText text={t('menu')} />
            </HeaderContainer>

            <MenuContainer>
                {MenuOptions.map((menu, index) => (
                    <MenuOptionButton
                        key={index}
                        text={t(menu.text)}
                        color={menu.color}
                        onPress={() =>
                            navigation.navigate(Screens.GameScreen, {
                                title: menu.text,
                                color: menu.bgColor ?? '',
                            })
                        }
                    />
                ))}
            </MenuContainer>
        </SafeViewBg>
    );
}
