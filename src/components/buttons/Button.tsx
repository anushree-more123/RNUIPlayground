import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  Text,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

import { IconProp } from '@fortawesome/fontawesome-svg-core';

import AppIcon from '../common/AppIcon';
import { useAppTheme } from '../../theme/ThemeContext';
import { styles } from './Button.styles';

export type ButtonVariant = 'solid' | 'outlined' | 'soft' | 'text';
export type ButtonShape = 'rounded' | 'pill' | 'square';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonTone = 'accent' | 'success' | 'warning' | 'error';

export interface ButtonCustomColors {
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  iconColor?: string;
  loaderColor?: string;
}

interface ButtonProps {
  title?: string;
  onPress: (event: GestureResponderEvent) => void;

  // Appearance
  variant?: ButtonVariant;
  shape?: ButtonShape;
  size?: ButtonSize;
  tone?: ButtonTone;

  // Icon
  icon?: IconProp;
  iconPosition?: 'left' | 'right';
  iconOnly?: boolean;
  iconSize?: number;

  // States
  loading?: boolean;
  disabled?: boolean;

  // Customization
  customColors?: ButtonCustomColors;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'solid',
  shape = 'rounded',
  size = 'medium',
  tone = 'accent',
  icon,
  iconPosition = 'left',
  iconOnly = false,
  iconSize,
  loading = false,
  disabled = false,
  customColors,
  style,
  labelStyle,
}) => {
  const { colors } = useAppTheme();

  // Default colors based on selected tone
  const toneColors = {
    accent: {
      main: colors.accent,
      soft: colors.accentLight,
      foreground: colors.accentStrong,
    },
    success: {
      main: colors.success,
      soft: colors.successBackground,
      foreground: colors.success,
    },
    warning: {
      main: colors.warning,
      soft: colors.warningBackground,
      foreground: colors.warning,
    },
    error: {
      main: colors.error,
      soft: colors.errorBackground,
      foreground: colors.error,
    },
  };

  const selectedTone = toneColors[tone];

  // Default variant colors
  const defaultBackgroundColor =
    variant === 'solid'
      ? selectedTone.main
      : variant === 'soft'
      ? selectedTone.soft
      : 'transparent';

  const defaultTextColor =
    variant === 'solid'
      ? colors.textInverse
      : variant === 'soft' || variant === 'text'
      ? selectedTone.foreground
      : selectedTone.main;

  const defaultBorderColor =
    variant === 'outlined' ? selectedTone.main : 'transparent';

  // Custom colors override default theme colors
  const backgroundColor =
    customColors?.backgroundColor ?? defaultBackgroundColor;

  const textColor = customColors?.textColor ?? defaultTextColor;

  const borderColor = customColors?.borderColor ?? defaultBorderColor;

  const iconColor = customColors?.iconColor ?? textColor;

  const loaderColor = customColors?.loaderColor ?? textColor;

  const isDisabled = disabled || loading;

  const resolvedIconSize =
    iconSize ?? (size === 'small' ? 14 : size === 'medium' ? 17 : 20);

  const renderIcon = () => {
    if (!icon) {
      return null;
    }

    return <AppIcon icon={icon} size={resolvedIconSize} color={iconColor} />;
  };

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      accessibilityRole="button"
      accessibilityLabel={iconOnly ? title : undefined}
      accessibilityState={{
        disabled: isDisabled,
        busy: loading,
      }}
      style={({ pressed }) => [
        styles.button,
        styles[size],
        styles[shape],
        iconOnly && styles.iconOnly,
        {
          backgroundColor,
          borderColor,
          borderWidth: variant === 'outlined' ? 1 : 0,
          opacity: isDisabled ? 0.5 : pressed ? 0.8 : 1,
        },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator size="small" color={loaderColor} />
      ) : (
        <>
          {iconPosition === 'left' && renderIcon()}

          {!iconOnly && title && (
            <Text style={[styles.label, { color: textColor }, labelStyle]}>
              {title}
            </Text>
          )}

          {iconPosition === 'right' && renderIcon()}
        </>
      )}
    </Pressable>
  );
};

export default Button;
