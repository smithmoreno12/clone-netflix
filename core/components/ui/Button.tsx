// core/components/WavrButton.tsx
import { ComponentType } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { EaseView } from 'react-native-ease';
import { useState } from 'react';
import type { SvgProps } from 'react-native-svg';

type Variant = 'primary' | 'secondary';

type Props = TouchableOpacityProps & {
  label: string;
  icon: ComponentType<SvgProps>;
  variant?: Variant;
};

const variantStyles: Record<Variant, { container: string; text: string; iconColor: string }> = {
  primary: {
    container: 'bg-white',
    text: 'text-dark',
    iconColor: '#000000',
  },
  secondary: {
    container: 'bg-button',
    text: 'text-white',
    iconColor: '#FFFFFF',
  },
};

export const Button = ({ label, icon: Icon, variant = 'primary', ...touchableProps }: Props) => {
  const [pressed, setPressed] = useState(false);
  const styles = variantStyles[variant];

  return (
    <EaseView
      animate={{ scale: pressed ? 0.95 : 1 }}
      transition={{ type: 'spring', damping: 15, stiffness: 200 }}>
      <TouchableOpacity
        activeOpacity={1}
        onPressIn={() => setPressed(true)}
        onPressOut={() => setPressed(false)}
        className={`h-[38px]  flex-row items-center justify-center gap-1 rounded px-1.5 py-3 ${styles.container}`}
        {...touchableProps}>
        <Icon width={24} height={24} stroke={styles.iconColor} />
        <Text className={`font-netflix-medium text-15 ${styles.text}`}>{label}</Text>
      </TouchableOpacity>
    </EaseView>
  );
};
