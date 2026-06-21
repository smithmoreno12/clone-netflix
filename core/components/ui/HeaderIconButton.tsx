import { TouchableOpacity } from 'react-native';
import type { SvgProps } from 'react-native-svg';

type HeaderIconButtonProps = {
  Icon: React.FC<SvgProps>;
  onPress: () => void;
  size?: number;
};

export const HeaderIconButton = ({ Icon, onPress, size = 24 }: HeaderIconButtonProps) => (
  <TouchableOpacity onPress={onPress} hitSlop={10}>
    <Icon width={size} height={size} stroke="#FFFFFF" />
  </TouchableOpacity>
);
