import {MainStackParamList} from '@navigation/MainNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {colors} from '@utils/constants';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {
    MenuOptionButton,
    GoBackButton,
    HeaderText,
    MenuContainer,
    SafeViewBg,
} from './MenuScreen.UI';

type MenuScreenProps = NativeStackScreenProps<MainStackParamList>;

function MenuScreen({navigation}: MenuScreenProps): JSX.Element {
    const {t} = useTranslation();

    const onGoBack = () => navigation.goBack();

    return (
        <SafeViewBg>
            <HeaderText text={t('menu')} />
            <GoBackButton onPress={onGoBack} />

            <MenuContainer>
                <MenuOptionButton
                    text={'Quién fue .. ? '}
                    color={`${colors.menuYellow}`}
                    onPress={() => console.log('')}
                />

                <MenuOptionButton
                    text={'Historia'}
                    color={`${colors.menuOrange}`}
                    onPress={() => console.log('')}
                />

                <MenuOptionButton
                    text={'Profecías'}
                    color={`${colors.menuPale}`}
                    onPress={() => console.log('')}
                />

                <MenuOptionButton
                    text={'Quién dijo .. ?'}
                    color={`${colors.menuBlue}`}
                    onPress={() => console.log('')}
                />

                <MenuOptionButton
                    text={'Ajustes'}
                    color={`${colors.green}`}
                    onPress={() => console.log('')}
                />

                <MenuOptionButton
                    text={'Estadísticas'}
                    color={`${colors.yellow}`}
                    onPress={() => console.log('')}
                />
            </MenuContainer>
        </SafeViewBg>
    );
}

export {MenuScreen};
