import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { EaseView } from 'react-native-ease';
import { useState } from 'react';
import type { NextWatch } from '@/core/constants'; // ajusta la ruta si el type vive en otro archivo

type Props = {
  data: NextWatch[];
};

export const NextContent = ({ data }: Props) => {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="gap-3 px-4">
        {data.map((thum, index) => (
          <AnimatedThumbnail key={thum.id} thum={thum} index={index} />
        ))}
      </ScrollView>
    </View>
  );
};

type ThumbnailProps = {
  thum: NextWatch;
  index: number;
};

const AnimatedThumbnail = ({ thum, index }: ThumbnailProps) => {
  const [pressed, setPressed] = useState(false);

  return (
    <EaseView
      initialAnimate={{ opacity: 0, translateX: 24 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ type: 'timing', duration: 300, delay: index * 80 }}
      className="h-[218px] w-[110px] justify-center overflow-hidden rounded">
      <TouchableOpacity
        activeOpacity={1}
        onPressIn={() => setPressed(true)}
        onPressOut={() => setPressed(false)}>
        <EaseView
          animate={{ scale: pressed ? 0.93 : 1 }}
          transition={{ type: 'spring', damping: 15, stiffness: 200 }}>
          <Image source={thum.img} resizeMode="cover" style={style.backGround} />
        </EaseView>
      </TouchableOpacity>
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
});
