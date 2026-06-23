import { VideoDetail } from '@/core/constants';
import { PlayButton, videoDetails } from '@/core/constants/assets';
import { Image, ImageBackground, Text, View, Pressable, TouchableOpacity } from 'react-native';

type VideoProps = {
  data: VideoDetail;
};
export const VideoPlay = ({ data }: VideoProps) => {
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
          <View className=" absolute right-0">
            <Text className="text-center text-white">x</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};
