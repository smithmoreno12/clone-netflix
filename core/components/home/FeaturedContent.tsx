import { featureInfo, videoDetail } from '@/core/constants';
import { FeaturedImage } from '@/core/constants/assets';
import { PlayIcon, PlusIcon } from '@/core/constants/svg';
import { LinearGradient } from 'expo-linear-gradient';
import { EaseView } from 'react-native-ease';
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { router } from 'expo-router';

export const FeaturedContent = () => {
  return (
    <EaseView
      initialAnimate={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: 'timing', duration: 300 }}
      className="mt-5 items-center justify-center">
      {videoDetail.map((item) => (
        <View
          key={item.id}
          className="h-[500px] w-[345px] items-center overflow-hidden rounded-xl border border-button">
          <Pressable
            onPress={() =>
              router.push({
                pathname: '/details/[id]',
                params: {
                  id: item.id,
                },
              })
            }>
            <ImageBackground resizeMode="cover" source={item.img} style={styles.imgBackground}>
              <View className=" absolute bottom-6 left-0 right-0 items-center">
                <Image source={FeaturedImage} style={styles.img} resizeMode="cover" />
                <View className="flex-row items-center justify-center gap-1.5">
                  {featureInfo.map((inf) => (
                    <Text key={inf} className=" font-netflix-regular text-13 text-white">
                      {inf}
                    </Text>
                  ))}
                </View>
                <EaseView
                  initialAnimate={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: 'timing', duration: 300, delay: 200 }}
                  className="mt-2 flex-row gap-1.5">
                  <TouchableOpacity className="h-[38px] w-[150px] flex-row items-center justify-center gap-1 rounded-xl bg-white px-1.5 py-3">
                    <PlayIcon width={24} height={24} stroke={'#000'} />
                    <Text className="font-netflix-medium text-15 text-dark">Play</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="h-[38px] w-[150px] flex-row items-center justify-center gap-1 rounded-xl bg-button px-1.5 py-3">
                    <PlusIcon width={24} height={24} stroke={'#FFFFFF'} />
                    <Text className="font-netflix-medium text-15 text-white">My List</Text>
                  </TouchableOpacity>
                </EaseView>
              </View>
            </ImageBackground>
          </Pressable>
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.85)', '#000000']}
            locations={[0, 0.6, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.bottomGradient}
            pointerEvents="none"
          />
        </View>
      ))}
    </EaseView>
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
