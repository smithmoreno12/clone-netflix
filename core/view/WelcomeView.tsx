import React from 'react';
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { EaseView } from 'react-native-ease';
import { profile } from '../constants';
import { PlusIcon } from '../constants/svg';
import { useStore } from '../store/store';
import { router } from 'expo-router';

export const WelcomeView = () => {
  const [visible, setVisible] = React.useState(true);
  const seleted = useStore((state) => state.seleted);

  return (
    <SafeAreaView className="flex-1 bg-dark">
      <EaseView
        className="flex-1"
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ type: 'timing', duration: 250 }}>
        <View className="mx-4 flex-1 ">
          {/* Header */}
          <EaseView
            initialAnimate={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: 'timing', duration: 300 }}
            className="relative mb-[154px] mt-3 flex-row items-center justify-center">
            <Text className="text-20 font-medium text-white">Who's Watching?</Text>
            <Pressable className="absolute right-0 justify-start ">
              <Text className="text-16 font-medium text-white">Edit</Text>
            </Pressable>
          </EaseView>
          {/* Select user */}
          <View className=" flex-row items-center justify-center gap-5">
            {profile.map((prof, index) => (
              <EaseView
                key={prof.id}
                initialAnimate={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: 'timing', duration: 300, delay: 150 + index * 100 }}>
                <TouchableOpacity onPress={seleted} className="items-center">
                  <Image
                    source={prof.img}
                    style={{ width: 104, height: 104, borderRadius: 13 }}
                    resizeMode="cover"
                  />
                  <Text numberOfLines={1} className="mt-2 font-netflix-regular text-18 text-white">
                    {prof.name}
                  </Text>
                </TouchableOpacity>
              </EaseView>
            ))}
          </View>
          <View className="mt-10 h-[134] items-center justify-center">
            <View className="h-[104] w-[104] items-center justify-center rounded border border-button">
              <TouchableOpacity>
                <PlusIcon width={44} height={44} stroke={'#FFFFFF'} />
              </TouchableOpacity>
            </View>
            <Text className=" mt-2 font-netflix-regular text-18 text-white">Add Profile</Text>
          </View>
        </View>
      </EaseView>
    </SafeAreaView>
  );
};
