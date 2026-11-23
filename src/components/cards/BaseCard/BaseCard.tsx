import React from 'react';
import { Pressable, View, StyleProp, ViewStyle } from 'react-native';

import { useAppTheme } from '../../../theme/ThemeContext';
import { styles } from './BaseCard.styles';

export type CardVariant = 'default' | 'outlined' | 'elevated' | 'filled';

export interface BaseCardProps {
  children: React.ReactNode;
  variant?: CardVariant;
  padding?: number;
  radius?: number;
  backgroundColor?: string;
  borderColor?: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const BaseCard: React.FC<BaseCardProps> = ({
  children,
  variant = 'default',
  padding,
  radius,
  backgroundColor,
  borderColor,
  style,
  onPress,
}) => {
  const { colors } = useAppTheme();

  const cardStyle = [
    styles.card,
    {
      padding: padding ?? 16,
      borderRadius: radius ?? 16,
      backgroundColor:
        backgroundColor ??
        (variant === 'filled' ? colors.surfaceSecondary : colors.surface),
      borderColor: borderColor ?? colors.border,
    },
    variant === 'outlined' && styles.outlined,
    variant === 'elevated' && styles.elevated,
    style,
  ];

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        accessibilityRole="button"
        style={({ pressed }) => [cardStyle, pressed && styles.pressed]}
      >
        {children}
      </Pressable>
    );
  }

  return <View style={cardStyle}>{children}</View>;
};

export default BaseCard;
