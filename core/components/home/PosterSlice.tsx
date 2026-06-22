import { thumbVideo } from '@/core/constants';
import { image29 } from '@/core/constants/assets';
import { InfoIcon, MoreVerticalIcon } from '@/core/constants/svg';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
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
  const [progresBar, setProgresBar] = useState(30);
  return (
    <View className="mt-4">
      <Text className="mb-2 font-netflix-medium text-16 text-white">{title}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="gap-3 px-4">
        {thumbVideo.map((thum) => (
          <View
            key={thum.id}
            className="h-[195.53px] w-[110px] justify-center overflow-hidden rounded">
            <ImageBackground source={thum.img} resizeMode="contain" style={style.backGround}>
              <TouchableOpacity className="flex-1 items-center justify-center">
                <Image resizeMode="contain" source={thum.play} style={{ width: 57, height: 57 }} />
              </TouchableOpacity>

              <View className="items-center">
                <Text className="font-netflix-regular text-13 text-white">{thum.duracion}</Text>
                <View className=" mt-2 h-1 w-full overflow-hidden  bg-gray-300">
                  <View className="h-full  bg-red-500" style={{ width: `${progresBar}%` }} />
                </View>
              </View>
            </ImageBackground>
            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,0.85)', '#000000']}
              locations={[0, 0.6, 1]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={style.bottomGradient}
              pointerEvents="none"
            />
            <View className="h-[39px] flex-row justify-between gap-2 p-2.5">
              <Pressable>
                <InfoIcon width={24} height={24} stroke={'#FFFFFF'} />
              </Pressable>
              <Pressable>
                <MoreVerticalIcon width={24} height={24} stroke={'#FFFFFF'} />
              </Pressable>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
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
