import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key: string, value: string): Promise<void> => {
    try {
        const savedValue = typeof value === 'string' ? value : JSON.stringify(value);
        await AsyncStorage.setItem(`@${key}`, savedValue);
    } catch (e) {
        // saving error
        console.error(e);
    }
};
