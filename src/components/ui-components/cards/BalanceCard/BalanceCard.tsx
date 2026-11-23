import React from 'react';
import { Text, View, StyleProp, ViewStyle } from 'react-native';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faWallet } from '@fortawesome/free-solid-svg-icons';

import AppIcon from '../../../common/AppIcon';
import BaseCard from '../BaseCard/BaseCard';
import { useAppTheme } from '../../../../theme/ThemeContext';
import { styles } from './BalanceCard.styles';

export interface BalanceCardProps {
  title: string;
  amount: string;
  subtitle?: string;
  icon?: IconProp;
  variant?: 'default' | 'accent';
  backgroundColor?: string;
  textColor?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const BalanceCard: React.FC<BalanceCardProps> = ({
  title,
  amount,
  subtitle,
  icon = faWallet,
  variant = 'default',
  backgroundColor,
  textColor,
  onPress,
  style,
}) => {
  const { colors } = useAppTheme();

  const isAccent = variant === 'accent';

  const cardBackground =
    backgroundColor ?? (isAccent ? colors.accent : colors.surface);

  const contentColor =
    textColor ?? (isAccent ? colors.textInverse : colors.textPrimary);

  const secondaryColor = isAccent ? colors.textInverse : colors.textSecondary;

  return (
    <BaseCard
      backgroundColor={cardBackground}
      borderColor={isAccent ? cardBackground : colors.border}
      style={[styles.container, style]}
      onPress={onPress}
    >
      <View style={styles.header}>
        <AppIcon
          icon={icon}
          color={isAccent ? contentColor : colors.accent}
          size={20}
        />
      </View>

      <View style={styles.details}>
        <Text style={[styles.title, { color: secondaryColor }]}>{title}</Text>

        <Text style={[styles.amount, { color: contentColor }]}>{amount}</Text>

        {subtitle ? (
          <Text style={[styles.subtitle, { color: secondaryColor }]}>
            {subtitle}
          </Text>
        ) : null}
      </View>
    </BaseCard>
  );
};

export default BalanceCard;
