import {Platform} from 'react-native';
import Toast from 'react-native-root-toast';
import ReactNativeHapticFeedback, {
  HapticFeedbackTypes,
} from 'react-native-haptic-feedback';

export type DistanceProps = {
  latStart: number;
  lngStart: number;
  latEnd: number;
  lngEnd: number;
};

function toRad(value: number) {
  return (value * Math.PI) / 180;
}

export const calcDistanceMet = ({
  latStart,
  lngStart,
  latEnd,
  lngEnd,
}: DistanceProps): number => {
  const R = 6371; // km
  const dLat = toRad(latEnd - latStart);
  const dLon = toRad(lngEnd - lngStart);
  const lat1Rad = toRad(latStart);
  const lat2Rad = toRad(latEnd);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) *
      Math.sin(dLon / 2) *
      Math.cos(lat1Rad) *
      Math.cos(lat2Rad);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c * 1000; // Km to meter
  return distance; // meter
};

export function showToast(smg: string) {
  if (!smg || typeof smg !== 'string' || smg === '') {
    return;
  }
  Toast.show(smg, {
    duration: Toast.durations.LONG,
    position: Toast.positions.CENTER,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
  });
}

const hapticOptionsAndroid = {
  enableVibrateFallback: false,
  ignoreAndroidSystemSettings: true,
};

export const HapticTypes = {
  selection: 'selection',
  impactLight: 'impactLight',
  impactMedium: 'impactMedium',
  impactHeavy: 'impactHeavy',
  notificationSuccess: 'notificationSuccess',
  notificationWarning: 'notificationWarning',
  notificationError: 'notificationError',
  clockTick: 'clockTick',
  contextClick: 'contextClick',
  keyboardPress: 'keyboardPress',
  keyboardRelease: 'keyboardRelease',
  keyboardTap: 'keyboardTap',
  longPress: 'longPress',
  textHandleMove: 'textHandleMove',
  virtualKey: 'virtualKey',
  virtualKeyRelease: 'virtualKeyRelease',
};

const hapticTypeDefault: HapticFeedbackTypes = Platform.select({
  ios: 'impactLight',
  android: 'impactMedium',
}) as HapticFeedbackTypes;

export const hapticFeedback = (
  type: string | HapticFeedbackTypes = hapticTypeDefault,
  options = hapticOptionsAndroid,
): void => {
  ReactNativeHapticFeedback.trigger(type as HapticFeedbackTypes, options);
};

export const isEmail = (email: string): boolean => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
