import { Text } from 'react-native';

type Props = {
  title?: string;
};
export const Poster = ({ title }: Props) => {
  return <Text className="mt-2 font-netflix-medium text-16 text-white">{title}</Text>;
};
