import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
export const ArrowDown03Icon = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={24}
    height={24}
    color="#000000"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    {...props}>
    <Path d="M6 20L18 20" />
    <Path d="M12 16V4" strokeLinejoin="round" />
    <Path d="M16 12C16 12 13.054 16 12 16C10.9459 16 8 12 8 12" strokeLinejoin="round" />
  </Svg>
);
