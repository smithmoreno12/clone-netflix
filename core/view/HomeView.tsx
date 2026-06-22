import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { FeaturedContent, Header, PosterSlice } from '..';
import { ArrowDown03Icon, CastIcon, Search01Icon } from '../constants/svg';
import { Filter } from '../components/home/Filter';

export const HomeView = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: top }} className="flex-1 bg-dark">
      <LinearGradient
        colors={['#39101E', '#080204']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={style.linear}
        //style={StyleSheet.absoluteFill}
      />
      <ScrollView
        className="flex-grow"
        contentInsetAdjustmentBehavior="automatic"
        contentContainerClassName="mx-4"
        showsVerticalScrollIndicator={false}>
        <Header
          title="For Saurabh Saini"
          actions={[
            { id: 'cast', Icon: CastIcon, onPress: () => {} },
            { id: 'download', Icon: ArrowDown03Icon, onPress: () => {} },
            { id: 'search', Icon: Search01Icon, onPress: () => {} },
          ]}
        />
        <Filter />
        <FeaturedContent />
        <PosterSlice title="Continue Watching for Saubh Saini" />
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
    height: 300,
  },
});
