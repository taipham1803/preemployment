import AsyncStorage from '@react-native-async-storage/async-storage';

const safeJsonParse: (_jsonString: string) => any | null = jsonString => {
  try {
    return JSON.parse(jsonString);
  } catch (e) {
    return null;
  }
};

export const APP_PREFIX = 'app.';

export const AsyncStorageKeys = {
  userToken: APP_PREFIX + 'userToken',
  email: APP_PREFIX + 'email',
};

export const getAsyncStorage: (
  key: string,
  jsonParse?: boolean,
) => Promise<string | null> = async (key, jsonParse = false) => {
  const validKey = (key + '').trim().toLocaleLowerCase();
  if (!validKey) return null;

  const value = (await AsyncStorage.getItem(validKey)) || '';

  return jsonParse ? safeJsonParse(value) : value;
};

export const setAsyncStorage: (
  key: string,
  value: any,
  stringify?: boolean,
) => Promise<void | null | undefined> = async (
  key,
  value,
  stringify = false,
) => {
  const validKey = (key + '').trim().toLocaleLowerCase();
  if (!validKey) return null;

  const validValue = stringify ? JSON.stringify(value) : value;

  await AsyncStorage.setItem(validKey, validValue);
};
