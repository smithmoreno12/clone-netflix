import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
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
        {data.map((thum) => (
          <View
            key={thum.id}
            className="h-[218px] w-[110px] justify-center overflow-hidden rounded">
            <TouchableOpacity>
              <Image source={thum.img} resizeMode="cover" style={style.backGround} />
            </TouchableOpacity>
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
});
