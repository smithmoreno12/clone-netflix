import { thumbVideo } from '@/core/constants';
import { InfoIcon, MoreVerticalIcon } from '@/core/constants/svg';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { EaseView } from 'react-native-ease';
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type Props = {
  title?: string;
};

export const PosterSlice = ({ title }: Props) => {
  return (
    <View className="mt-4">
      <EaseView
        initialAnimate={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'timing', duration: 300 }}>
        <Text className="mb-4 font-netflix-medium text-16 text-white">{title}</Text>
      </EaseView>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="gap-3 px-4">
        {thumbVideo.map((thum, index) => (
          <AnimatedPoster key={thum.id} thum={thum} index={index} />
        ))}
      </ScrollView>
    </View>
  );
};

type PosterProps = {
  thum: (typeof thumbVideo)[number];
  index: number;
};

const AnimatedPoster = ({ thum, index }: PosterProps) => {
  const [pressed, setPressed] = useState(false);
  return (
    <EaseView
      initialAnimate={{ opacity: 0, translateX: 24 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ type: 'timing', duration: 300, delay: index * 80 }}
      className="h-[218px] w-[110px] justify-center overflow-hidden rounded">
      <ImageBackground source={thum.img} resizeMode="contain" style={style.backGround}>
        <TouchableOpacity
          activeOpacity={1}
          className="flex-1 items-center justify-center"
          onPressIn={() => setPressed(true)}
          onPressOut={() => setPressed(false)}>
          <EaseView
            animate={{ scale: pressed ? 0.85 : 1 }}
            transition={{ type: 'spring', damping: 15, stiffness: 200 }}>
            <Image resizeMode="contain" source={thum.play} style={{ width: 57, height: 57 }} />
          </EaseView>
        </TouchableOpacity>

        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.85)', '#000000']}
          locations={[0, 0.6, 1]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={style.bottomGradient}
          pointerEvents="none"
        />
      </ImageBackground>

      <View className="items-center">
        <Text className="mt-1 font-netflix-regular text-13 text-white">{thum.duracion}</Text>
        {thum.progreso > 0 && (
          <EaseView
            initialAnimate={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ type: 'timing', duration: 500, delay: index * 80 + 200 }}
            className="mt-2 h-1 w-full overflow-hidden bg-gray-300"
            style={{ transformOrigin: 'left' }}>
            <View className="h-full bg-red-500" style={{ width: `${thum.progreso}%` }} />
          </EaseView>
        )}
      </View>

      <View className="h-[39px] flex-row justify-between gap-2 p-2.5">
        <Pressable>
          <InfoIcon width={24} height={24} stroke={'#FFFFFF'} />
        </Pressable>
        <Pressable>
          <MoreVerticalIcon width={24} height={24} stroke={'#FFFFFF'} />
        </Pressable>
      </View>
    </EaseView>
  );
};

const style = StyleSheet.create({
  backGround: {
    height: 154,
    width: 110,
    borderColor: '#3D393A',
    borderWidth: 1,
    overflow: 'hidden',
  },
  bottomGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 20,
  },
});
