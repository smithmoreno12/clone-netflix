import { featureInfo } from '@/core/constants';
import { FeaturedImage, image111 } from '@/core/constants/assets';
import { PlayIcon, PlusIcon } from '@/core/constants/svg';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const FeaturedContent = () => {
  return (
    <View className=" mt-5">
      <View className="h-[500px] w-[345px] items-center overflow-hidden rounded-xl border border-button">
        <ImageBackground resizeMode="cover" source={image111} style={styles.imgBackground}>
          <View className=" absolute bottom-6 left-0 right-0 items-center">
            <Image source={FeaturedImage} style={styles.img} resizeMode="cover" />
            <View className="flex-row items-center justify-center gap-1.5">
              {featureInfo.map((inf) => (
                <Text key={inf} className=" font-netflix-regular text-13 text-white">
                  {inf}
                </Text>
              ))}
            </View>
            <View className="mt-2 flex-row gap-1.5">
              <TouchableOpacity className="h-[38px] w-[150px] flex-row items-center justify-center gap-1 rounded-xl bg-white px-1.5 py-3">
                <PlayIcon width={24} height={24} stroke={'#000'} />
                <Text className="font-netflix-medium text-15 text-dark">Play</Text>
              </TouchableOpacity>
              <TouchableOpacity className="h-[38px] w-[150px] flex-row items-center justify-center gap-1 rounded-xl bg-button px-1.5 py-3">
                <PlusIcon width={24} height={24} stroke={'#FFFFFF'} />
                <Text className="font-netflix-medium text-15 text-white">My List</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.85)', '#000000']}
          locations={[0, 0.6, 1]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.bottomGradient}
          pointerEvents="none"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgBackground: {
    height: 486,
    width: 345,
  },
  img: {
    height: 78,
    width: 281,
    marginBottom: 8,
  },
  bottomGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
  },
});
