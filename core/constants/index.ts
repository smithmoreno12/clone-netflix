import { ImageSourcePropType } from 'react-native';
import {
  AddIcon,
  Container,
  image111,
  image17,
  image23,
  InternaImage,
  InternaImage2,
  InternaImage3png,
  LikeIcon,
  PlayButton,
  PosterImage1,
  PosterImage2,
  PosterImage3,
  PosterImage4,
  share,
  VideoThumbnail1,
  VideoThumbnail2,
  VideoThumbnail3,
  VideoThumbnail4,
} from './assets';
import { Navigation03Icon, PlusIcon } from './svg';
import { SvgProps } from 'react-native-svg';

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

export type VideoDetail = {
  id: string;
  title: string;
  year: string;
  duration: string;
  size: string;
  descri: string;
  img: ImageSourcePropType;
  cast: string;
  creator: string;
};
export const videoDetail: VideoDetail[] = [
  {
    id: '1',
    title: 'Anweshippin Kandethum',
    year: '2024',
    duration: '2h 22m',
    size: 'HD',
    descri:
      'Wronfully suspended while pursuing the culprit in a missing persons case, a cop seeks redemtion - and justice - when he gets a new assignment',
    img: image111,
    cast: 'Tovino Thomas, Siddique, Vineeth Thattil David... more',
    creator: 'Darwin Kuriakose',
  },
];

type ButtonAction = {
  id: string;
  icon: ImageSourcePropType;
  label: string;
};
export const buttonAction: ButtonAction[] = [
  {
    id: '1',
    icon: AddIcon,
    label: 'My List',
  },
  {
    id: '2',
    icon: LikeIcon,
    label: 'Rate',
  },
  {
    id: '3',
    icon: share,
    label: 'Share',
  },
];
