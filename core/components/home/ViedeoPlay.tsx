import { Cancel01Icon } from '@/assets/svg/Cancel01Icon';
import { PlayButton, videoDetails } from '@/core/constants/assets';
import { CastIcon } from '@/core/constants/svg';
import { router } from 'expo-router';
import { Image, ImageBackground, View, TouchableOpacity, Pressable } from 'react-native';

export const VideoPlay = () => {
  return (
    <View className="mt-4">
      <View className="h-[222px] w-full bg-slate-300">
        <ImageBackground
          source={videoDetails}
          style={{ width: '100%', height: 222 }}
          resizeMode="cover">
          <TouchableOpacity className="flex-1 items-center justify-center ">
            <Image style={{ width: 57, height: 57 }} source={PlayButton} resizeMode="cover" />
          </TouchableOpacity>
          <Pressable className=" absolute right-0 top-4 mx-3 flex-row gap-3 ">
            <View className=" relative flex-row items-center justify-center  rounded-full bg-button">
              <CastIcon width={16} height={16} stroke={'#FFFFFF'} />
            </View>
            <Pressable
              onPress={() => router.back()}
              className=" relative flex-row items-center justify-center rounded-full bg-button">
              <Cancel01Icon width={16} height={16} stroke={'#FFFFFF'} />
            </Pressable>
          </Pressable>
        </ImageBackground>
      </View>
    </View>
  );
};
