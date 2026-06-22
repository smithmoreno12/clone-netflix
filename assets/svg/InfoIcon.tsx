import * as React from 'react';
import Svg, { Circle, Path, SvgProps } from 'react-native-svg';
export const InfoIcon = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={24}
    height={24}
    color="currentColor"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}>
    <Circle cx={12} cy={11.9999} r={10} />
    <Path d="M12 15.9999L12 11.9999" />
    <Path d="M11.875 8.24994L12 8.24994M11.75 8.24994C11.75 8.11187 11.8619 7.99994 12 7.99994C12.1381 7.99994 12.25 8.11187 12.25 8.24994C12.25 8.38801 12.1381 8.49994 12 8.49994C11.8619 8.49994 11.75 8.38801 11.75 8.24994Z" />
  </Svg>
);
