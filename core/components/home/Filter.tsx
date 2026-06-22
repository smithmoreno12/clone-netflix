import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const types = ['TV Shows', 'Movies', 'Categories'];

export const Filter = () => {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
  return (
    <View className="mt-5">
      <View className="flex-row items-center">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerClassName="gap-2">
          {types.map((item, index) => {
            const isSelected = selectedIndex === index;
            return (
              <TouchableOpacity
                key={item}
                onPress={() => setSelectedIndex(index)}
                className={`items-center justify-center rounded-3xl border px-6 py-3 ${isSelected ? 'border-white' : 'border-button'}`}>
                <Text
                  numberOfLines={1}
                  className={
                    isSelected
                      ? 'font-netflix-medium text-18 text-white'
                      : 'font-netflix-medium text-16 text-white'
                  }
                  style={styles.text}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    lineHeight: 18,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
});
