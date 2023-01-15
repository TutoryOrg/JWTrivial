import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key: string, value: string): Promise<void | boolean> => {
    try {
        await AsyncStorage.setItem(key, value);
        return true;
    } catch (e) {
        // saving error
        console.error(e);
    }
};
