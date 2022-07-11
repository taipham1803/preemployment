import {TextStyle} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {resHeight, resWidth} from 'styles';
import {Colors} from './palette';

export const scaleFromFigma = (size: number) => responsiveFontSize(size / 7.6);

const base = (
  fontSize = 14,
  fontWeight = '400',
  color = Colors.black,
  lineHeight: number | undefined,
) => ({
  fontSize: scaleFromFigma(fontSize),
  color,
  fontWeight,
  ...(typeof lineHeight === 'number' ? {lineHeight} : {}),
});

const margin = (
  left?: number | string,
  top?: number | string,
  right?: number | string,
  bottom?: number | string,
  x?: number | string,
  y?: number | string,
) => ({
  marginLeft: typeof left === 'number' ? resWidth(left) : left,
  marginTop: typeof top === 'number' ? resHeight(top) : top,
  marginRight: typeof right === 'number' ? resWidth(right) : right,
  marginBottom: typeof bottom === 'number' ? resHeight(bottom) : bottom,
  marginHorizontal: typeof x === 'number' ? resWidth(x) : x,
  marginVertical: typeof y === 'number' ? resHeight(y) : y,
});

const align = (
  self = 'auto',
  textAlign = 'auto',
  textAlignVertical = 'auto',
) => ({
  alignSelf: self,
  textAlign,
  textAlignVertical,
});

const decoration = (dec?: string, style?: string, color?: string) => ({
  ...(typeof dec === 'string' ? {textDecorationLine: dec} : {}),
  ...(typeof style === 'string' ? {textDecorationStyle: style} : {}),
  ...(typeof color === 'string' ? {textDecorationColor: color} : {}),
});

export type FontStyle = {
  wei?: string;
  l?: number | string;
  t?: number | string;
  r?: number | string;
  b?: number | string;
  x?: number | string;
  y?: number | string;
  self?: string;
  text?: string;
  op?: number;
  dec?: string;
  decStyle?: string;
  secColor?: string;
  textVer?: string;
  h?: number;
};

const Fonts = {
  t: (
    size: number,
    color: string,
    {
      wei,
      l,
      t,
      r,
      b,
      x,
      y,
      self,
      text,
      op,
      dec,
      decStyle,
      secColor,
      textVer,
      h,
    }: FontStyle = {},
  ): TextStyle =>
    ({
      ...base(size, wei, color, h),
      ...margin(l, t, r, b, x, y),
      ...align(self, text, textVer),
      ...decoration(dec, decStyle, secColor),
      opacity: op,
    } as TextStyle),
};

export default Fonts;
