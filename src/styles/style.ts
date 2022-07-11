import {ImageStyle, StyleProp, ViewStyle} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export const gutters = responsiveWidth(5.33);
export const mainBorderRadius = 10;
export const resHeight = (height: number | string) => {
  if (typeof height === 'number') {
    return responsiveHeight(height / 8.12); // 812px height follow by iPhone X
  }
  return height;
};
export const resWidth = (width: number | string) => {
  if (typeof width === 'number') {
    return responsiveWidth(width / 3.75); // 375px width follow by iPhone X
  }
  return width;
};

export type BorderStyle = {
  bor?: number;
  color?: string;
  width?: number;
  btw?: number;
  blw?: number;
  brw?: number;
  bbw?: number;
  das?: boolean;
  bblr?: number;
  bbrr?: number;
  btlr?: number;
  btrr?: number;
};

const border = ({
  bor,
  color,
  width,
  btw,
  blw,
  brw,
  bbw,
  das,
  bblr,
  bbrr,
  btlr,
  btrr,
}: BorderStyle) => ({
  ...(typeof bor === 'number' ? {borderRadius: resWidth(bor)} : {}),
  ...(typeof color === 'string' ? {borderColor: color} : {}),
  ...(typeof width === 'number' ? {borderWidth: resWidth(width)} : {}),
  ...(typeof btw === 'number' ? {borderTopWidth: resHeight(btw)} : {}),
  ...(typeof blw === 'number' ? {borderLeftWidth: resWidth(blw)} : {}),
  ...(typeof brw === 'number' ? {borderRightWidth: resWidth(brw)} : {}),
  ...(typeof bbw === 'number' ? {borderBottomWidth: resHeight(bbw)} : {}),
  ...(typeof bblr === 'number'
    ? {borderBottomLeftRadius: resHeight(bblr)}
    : {}),
  ...(typeof bbrr === 'number'
    ? {borderBottomRightRadius: resHeight(bbrr)}
    : {}),
  ...(typeof btlr === 'number' ? {borderTopLeftRadius: resHeight(btlr)} : {}),
  ...(typeof btrr === 'number' ? {borderTopRightRadius: resHeight(btrr)} : {}),
  ...(das !== undefined ? {borderStyle: 'dashed'} : {}),
});

export type ContainerStyle = {
  flex?: number;
  direc?: string;
  bg?: string;
  w?: number | string;
  h?: number | string;
  bor?: number;
  borColor?: string;
  m?: number | string;
  mt?: number | string;
  ml?: number | string;
  mr?: number | string;
  mb?: number | string;
  mx?: number | string;
  my?: number | string;
  p?: number | string;
  pt?: number | string;
  pl?: number | string;
  pr?: number | string;
  pb?: number | string;
  px?: number | string;
  py?: number | string;
  cen?: boolean;
  items?: string;
  justify?: string;
  self?: string;
  pos?: string;
  l?: number | string;
  t?: number | string;
  r?: number | string;
  b?: number | string;
  size?: number;
  tin?: string;
  z?: number;
  wrap?: string;
  mw?: number | string;
  over?: string;
  op?: number;
  rotate?: string;
};

const con = ({
  flex,
  direc,
  bg,
  w,
  h,
  bor,
  borColor,
  m,
  mt,
  ml,
  mr,
  mb,
  mx,
  my,
  p,
  pt,
  pl,
  pr,
  pb,
  px,
  py,
  cen = false,
  items,
  justify,
  self,
  pos,
  l,
  t,
  r,
  b,
  size,
  tin,
  z,
  wrap,
  mw,
  over,
  op,
  rotate,
}: ContainerStyle) =>
  ({
    ...(typeof flex === 'number' ? {flex: flex} : {}),
    ...(typeof direc === 'string' ? {flexDirection: direc} : {}),
    ...(typeof bg === 'string' ? {backgroundColor: bg} : {}),
    ...(w !== undefined ? {width: resWidth(w)} : {}),
    ...(h !== undefined ? {height: resWidth(h)} : {}),
    ...(bor !== undefined ? {borderRadius: resWidth(bor)} : {}),
    ...(m !== undefined ? {margin: resWidth(m)} : {}),
    ...(mx !== undefined ? {marginHorizontal: resWidth(mx)} : {}),
    ...(my !== undefined ? {marginVertical: resWidth(my)} : {}),
    ...(mt !== undefined ? {marginTop: resHeight(mt)} : {}),
    ...(ml !== undefined ? {marginLeft: resWidth(ml)} : {}),
    ...(mr !== undefined ? {marginRight: resWidth(mr)} : {}),
    ...(mb !== undefined ? {marginBottom: resHeight(mb)} : {}),
    ...(px !== undefined ? {paddingHorizontal: resWidth(px)} : {}),
    ...(py !== undefined ? {paddingVertical: resHeight(py)} : {}),
    ...(p !== undefined ? {padding: resHeight(p)} : {}),
    ...(pt !== undefined ? {paddingTop: resHeight(pt)} : {}),
    ...(pl !== undefined ? {paddingLeft: resWidth(pl)} : {}),
    ...(pr !== undefined ? {paddingRight: resWidth(pr)} : {}),
    ...(pb !== undefined ? {paddingBottom: resHeight(pb)} : {}),
    ...(typeof justify === 'string' ? {justifyContent: justify} : {}),
    ...(typeof items === 'string' ? {alignItems: items} : {}),
    ...(typeof self === 'string' ? {alignSelf: self} : {}),
    ...(typeof pos === 'string' ? {position: pos} : {}),
    left: typeof l === 'number' ? resHeight(l) : l,
    top: typeof t === 'number' ? resWidth(t) : t,
    right: typeof r === 'number' ? resHeight(r) : r,
    bottom: typeof b === 'number' ? resWidth(b) : b,
    ...(tin !== undefined ? {tintColor: tin} : {}),
    ...(z !== undefined ? {zIndex: z} : {}),
    ...(wrap !== undefined ? {flexWrap: wrap} : {}),
    ...(mw !== undefined ? {maxWidth: mw} : {}),
    ...(typeof over === 'string' ? {overflow: over} : {}),
    ...(typeof op === 'number' ? {opacity: op} : {}),
    ...(typeof borColor === 'string' ? {borderColor: borColor} : {}),
    ...(typeof rotate === 'string' ? {transform: [{rotate: rotate}]} : {}),
    ...(cen
      ? {
          justifyContent: 'center',
          alignItems: 'center',
        }
      : {}),
    ...(typeof size === 'number'
      ? {
          width: size,
          height: size,
        }
      : {}),
  } as ViewStyle | Object | ImageStyle | StyleProp<ImageStyle>);

const Style = {
  con,
  border,
  sha: (
    color = 'rgba(0, 0, 0, 0.07)',
    width: number | string,
    height: number | string,
    radius: number,
    elevation: number,
  ) => ({
    shadowColor: color,
    shadowOffset: {
      width: width,
      height: height,
    },
    shadowOpacity: 1,
    shadowRadius: radius,
    elevation: elevation ?? radius,
  }),
};

export default Style;
