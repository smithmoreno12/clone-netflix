import { Text, TouchableOpacity, View } from 'react-native';
import { SvgProps } from 'react-native-svg';

type HeaderAction = {
  id: string;
  Icon: React.FC<SvgProps>;
  onPress: () => void;
};

type Props = {
  title?: string;
  actions?: HeaderAction[];
};

export function Header({ title, actions = [] }: Props) {
  return (
    <View className="flex h-[60px] w-full flex-row items-center justify-between gap-8">
      <Text className="font-netflix-medium text-22 text-white">{title}</Text>
      {actions.length > 0 && (
        <View className="flex-row items-center gap-4">
          {actions.map(({ id, Icon, onPress }) => (
            <TouchableOpacity key={id} onPress={onPress} hitSlop={10}>
              <Icon width={24} height={24} stroke="#FFFFFF" />
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}
