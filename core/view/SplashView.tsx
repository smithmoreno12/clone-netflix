import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

export const SplashView = ({ onFinish }: { onFinish: () => void }) => {
  const animationRef = React.useRef<LottieView>(null);
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <LottieView
        ref={animationRef}
        source={require('../../assets/lottie/Netflix Logo Swoop.json')}
        autoPlay
        loop={false}
        onAnimationFinish={onFinish}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};
