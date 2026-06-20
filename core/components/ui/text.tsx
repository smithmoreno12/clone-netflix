import { cn } from '@/core/utils';
import type { TextProps } from 'react-native';
import { Text as RNText } from 'react-native';
import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

const text = tv({
  base: 'text-foreground font-netflix-regular',
  variants: {
    variant: {
      display: 'text-22 font-netflix-medium',
      title: 'text-20 font-netflix-medium',
      subtitle: 'text-18 font-netflix-medium',
      body: 'text-16',
      'body-secondary': 'text-16 text-text-secondary',
      caption: 'text-13',
      'caption-secondary': 'text-13 text-text-secondary',
      button: 'text-16 font-netflix-medium text-primary-foreground',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});
type TextVariants = VariantProps<typeof text>;

interface TextComponentProps extends TextProps, TextVariants {
  className?: string;
}

export function Text({ variant = 'body', children, className, ...props }: TextComponentProps) {
  return (
    <RNText className={cn(text({ variant }), className)} {...props}>
      {children}
    </RNText>
  );
}
