import { ImageSourcePropType } from 'react-native';
import { image17, image23 } from './assets';

type Profile = {
  id: string;
  name: string;
  img: ImageSourcePropType;
};
export const profile: Profile[] = [
  {
    id: '1',
    name: 'Saurabh S..',
    img: image23,
  },
  {
    id: '2',
    name: 'Children',
    img: image17,
  },
];
