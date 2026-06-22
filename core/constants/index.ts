import { ImageSourcePropType } from 'react-native';
import {
  Container,
  image17,
  image23,
  InternaImage,
  InternaImage2,
  InternaImage3png,
  PlayButton,
  PosterImage1,
  PosterImage2,
  PosterImage3,
  PosterImage4,
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

export type NextWatch = {
  id: string;
  img: ImageSourcePropType;
};
export const nextWatch: NextWatch[] = [
  {
    id: '1',
    img: PosterImage1,
  },
  {
    id: '2',
    img: PosterImage2,
  },
  {
    id: '3',
    img: PosterImage3,
  },
  {
    id: '4',
    img: PosterImage4,
  },
];
export const International: NextWatch[] = [
  {
    id: '1',
    img: Container,
  },
  {
    id: '2',
    img: InternaImage,
  },
  {
    id: '3',
    img: InternaImage2,
  },
  {
    id: '4',
    img: InternaImage3png,
  },
];
export const Dramas: NextWatch[] = [
  {
    id: '1',
    img: PosterImage2,
  },
  {
    id: '2',
    img: PosterImage1,
  },
  {
    id: '3',
    img: PosterImage4,
  },
  {
    id: '4',
    img: PosterImage3,
  },
];
