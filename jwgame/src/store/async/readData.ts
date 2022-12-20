import AsyncStorage from '@react-native-async-storage/async-storage';

export const readData = async (key: string): Promise<string> => {
    try {
        const data = await AsyncStorage.getItem(`@${key}`);
        if (data) return data;
    } catch (e) {
        // error reading value
        console.error(e);
    }
    return '';
};
