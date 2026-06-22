import { ImageSourcePropType } from 'react-native';
import {
  image17,
  image23,
  PlayButton,
  VideoThumbnail1,
  VideoThumbnail2,
  VideoThumbnail3,
  VideoThumbnail4,
} from './assets';

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

export const featureInfo: string[] = ['Understated .', 'Dark .', 'Drama .', 'Detectives'];

type thumbVideo = {
  id: string;
  img: ImageSourcePropType;
  play: ImageSourcePropType;
  duracion: string;
  progreso: number; // 0 a 100
};

export const thumbVideo: thumbVideo[] = [
  {
    id: '1',
    img: VideoThumbnail4,
    play: PlayButton,
    duracion: '2h 56m',
    progreso: 45,
  },
  {
    id: '2',
    img: VideoThumbnail1,
    play: PlayButton,
    duracion: 'P5:E2',
    progreso: 80,
  },
  {
    id: '3',
    img: VideoThumbnail2,
    play: PlayButton,
    duracion: 'Episode 1',
    progreso: 10,
  },
  {
    id: '4',
    img: VideoThumbnail3,
    play: PlayButton,
    duracion: '2h 56m',
    progreso: 0,
  },
];
