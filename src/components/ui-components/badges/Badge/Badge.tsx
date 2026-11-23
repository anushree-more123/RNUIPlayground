import React from 'react';
import { Text, View, StyleProp, ViewStyle, TextStyle } from 'react-native';

import { IconProp } from '@fortawesome/fontawesome-svg-core';

import AppIcon from '../../../common/AppIcon';
import { useAppTheme } from '../../../../theme/ThemeContext';
import { styles } from './Badge.styles';

export type BadgeVariant = 'solid' | 'soft' | 'outlined' | 'subtle';

export type BadgeTone =
  | 'accent'
  | 'success'
  | 'warning'
  | 'error'
  | 'neutral'
  | 'info';

export type BadgeSize = 'small' | 'medium' | 'large';

export type BadgeShape = 'rounded' | 'pill' | 'square';

export interface BadgeCustomColors {
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  dotColor?: string;
  iconColor?: string;
}

export interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  tone?: BadgeTone;
  size?: BadgeSize;
  shape?: BadgeShape;
  icon?: IconProp;
  showDot?: boolean;
  customColors?: BadgeCustomColors;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const Badge: React.FC<BadgeProps> = ({
  label,
  variant = 'soft',
  tone = 'accent',
  size = 'medium',
  shape = 'pill',
  icon,
  showDot = false,
  customColors,
  style,
  textStyle,
}) => {
  const { colors } = useAppTheme();

  const toneColors = {
    accent: {
      solid: colors.accent,
      soft: colors.accentLight,
      text: colors.accentStrong,
    },
    success: {
      solid: colors.success,
      soft: colors.successBackground,
      text: colors.success,
    },
    warning: {
      solid: colors.warning,
      soft: colors.warningBackground,
      text: colors.warning,
    },
    error: {
      solid: colors.error,
      soft: colors.errorBackground,
      text: colors.error,
    },
    neutral: {
      solid: colors.textSecondary,
      soft: colors.surfaceSecondary,
      text: colors.textSecondary,
    },
    info: {
      solid: colors.accent,
      soft: colors.accentLight,
      text: colors.accent,
    },
  };

  const selectedTone = toneColors[tone];

  const backgroundColor =
    customColors?.backgroundColor ??
    (variant === 'solid'
      ? selectedTone.solid
      : variant === 'outlined'
      ? 'transparent'
      : variant === 'subtle'
      ? 'transparent'
      : selectedTone.soft);

  const textColor =
    customColors?.textColor ??
    (variant === 'solid' ? colors.textInverse : selectedTone.text);

  const borderColor = customColors?.borderColor ?? selectedTone.solid;

  const dotColor = customColors?.dotColor ?? selectedTone.solid;

  const iconColor = customColors?.iconColor ?? textColor;

  return (
    <View
      style={[
        styles.badge,
        styles[size],
        styles[shape],
        {
          backgroundColor,
          borderColor,
          borderWidth: variant === 'outlined' ? 1 : 0,
        },
        style,
      ]}
    >
      {showDot ? (
        <View
          style={[
            styles.dot,
            styles[`${size}Dot`],
            { backgroundColor: dotColor },
          ]}
        />
      ) : null}

      {icon ? (
        <AppIcon
          icon={icon}
          size={size === 'small' ? 10 : size === 'medium' ? 12 : 14}
          color={iconColor}
        />
      ) : null}

      <Text
        numberOfLines={1}
        style={[
          styles.label,
          styles[`${size}Label`],
          { color: textColor },
          textStyle,
        ]}
      >
        {label}
      </Text>
    </View>
  );
};

export default Badge;
