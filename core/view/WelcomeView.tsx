import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { profile } from '../constants';
import { PlusIcon } from '../constants/svg';

export const WelcomeView = () => {
  return (
    <SafeAreaView className="bg-dark flex-1 ">
      <View className="mx-4 flex-1 ">
        {/* Header */}
        <View className="relative mb-[154px] mt-3 flex-row items-center justify-center">
          <Text className="text-20 font-medium text-white">Who's Watching?</Text>
          <Pressable className="absolute right-0 justify-start ">
            <Text className="text-16 font-medium text-white">Edit</Text>
          </Pressable>
        </View>
        {/* Select user */}
        <View className=" flex-row items-center justify-center gap-5">
          {profile.map((prof) => (
            <TouchableOpacity key={prof.id} className="items-center">
              <Image
                source={prof.img}
                style={{ width: 104, height: 104, borderRadius: 13 }}
                resizeMode="cover"
              />
              <Text numberOfLines={1} className="font-netflix-regular text-18 mt-2 text-white">
                {prof.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View className="mt-10 h-[134] items-center justify-center">
          <View className="border-button h-[104] w-[104] items-center justify-center rounded border">
            <TouchableOpacity>
              <PlusIcon width={44} height={44} stroke={'#FFFFFF'} />
            </TouchableOpacity>
          </View>
          <Text className=" font-netflix-regular text-18 mt-2 text-white">Add Profile</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
