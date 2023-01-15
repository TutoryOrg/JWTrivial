import AsyncStorage from '@react-native-async-storage/async-storage';

export const readData = async (key: string): Promise<string | undefined> => {
    try {
        const data = await AsyncStorage.getItem(key);
        if (data) return JSON.parse(data);
    } catch (e) {
        console.error(e);
    }
    return;
};
