import { LinearGradient } from 'expo-linear-gradient';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import { videoDetail } from '../constants';
import { VideoPlay } from '../components/home/ViedeoPlay';
import { NetflixSymbol } from '../constants/assets';
import { Button } from '../components/ui/Button';
import { ArrowDown03Icon, PlayIcon } from '../constants/svg';

export const DetailsView = () => {
  const { top } = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();
  const data = videoDetail.find((a) => a.id === id);
  if (!data) return null;
  return (
    <View style={{ paddingTop: top }} className="flex-1 bg-dark">
      <LinearGradient
        colors={['#39101E', '#080204']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={style.linear}
      />
      <ScrollView
        className="flex-grow"
        contentInsetAdjustmentBehavior="automatic"
        contentContainerClassName="mx-4"
        showsVerticalScrollIndicator={false}>
        <VideoPlay data={data} />
        <View className="mb-1 mt-5 flex flex-row items-center justify-between">
          <Text className=" font-netflix-medium text-16 text-white">{data.title}</Text>
          <View className=" flex-row items-center justify-end gap-1 ">
            <Image source={NetflixSymbol} style={{ width: 21, height: 26 }} resizeMode="contain" />
            <Text className=" font-bold text-white">SERIES</Text>
          </View>
        </View>
        <View className="flex-row items-center gap-1.5">
          <Text className="font-netflix-regular text-13 text-white">{data.year}</Text>
          <Text className="rounded  bg-button pb-0.5 pl-1 pr-1 pt-0.5 text-white">U/A 16+</Text>
          <Text className="font-netflix-regular text-13 text-white">{data.duration}</Text>
          <Text className="rounded bg-button px-1.5  text-white">{data.size}</Text>
        </View>
        <View className="mt-5 gap-2">
          <Button variant="primary" icon={PlayIcon} label="Play" onPress={() => {}} />
          <Button variant="secondary" icon={ArrowDown03Icon} label="Dowload" onPress={() => {}} />
        </View>
      </ScrollView>
    </View>
  );
};
const style = StyleSheet.create({
  linear: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 100,
  },
});
