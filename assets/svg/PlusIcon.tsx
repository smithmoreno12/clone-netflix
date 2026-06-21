import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
export const PlusIcon = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={24}
    height={24}
    color="#000000"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}>
    <Path d="M11.9922 4.00012V20.0001M19.9922 12.0001H3.99222" />
  </Svg>
);
