import { Text } from 'react-native';
import { EaseView } from 'react-native-ease';

type Props = {
  title?: string;
};

export const Poster = ({ title }: Props) => {
  return (
    <EaseView
      initialAnimate={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: 'timing', duration: 300 }}>
      <Text className="font-netflix-medium text-16 text-white">{title}</Text>
    </EaseView>
  );
};
