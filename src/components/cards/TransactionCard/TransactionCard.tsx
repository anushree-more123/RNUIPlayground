import React from 'react';
import { Text, View, StyleProp, ViewStyle } from 'react-native';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faReceipt } from '@fortawesome/free-solid-svg-icons';

import AppIcon from '../../common/AppIcon';
import BaseCard from '../BaseCard/BaseCard';
import { useAppTheme } from '../../../theme/ThemeContext';
import { styles } from './TransactionCard.styles';

export interface TransactionCardProps {
  title: string;
  amount: string;
  subtitle?: string;
  icon?: IconProp;
  amountColor?: string;
  showBorder?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const TransactionCard: React.FC<TransactionCardProps> = ({
  title,
  amount,
  subtitle,
  icon = faReceipt,
  amountColor,
  showBorder = true,
  onPress,
  style,
}) => {
  const { colors } = useAppTheme();

  return (
    <BaseCard
      padding={12}
      radius={12}
      style={[
        styles.container,
        {
          borderWidth: showBorder ? 1 : 0,
          borderColor: colors.border,
        },
        style,
      ]}
      onPress={onPress}
    >
      <View style={styles.content}>
        <View
          style={[
            styles.iconContainer,
            { backgroundColor: colors.accentLight },
          ]}
        >
          <AppIcon icon={icon} size={17} color={colors.accent} />
        </View>

        <View style={styles.details}>
          <Text
            style={[styles.title, { color: colors.textPrimary }]}
            numberOfLines={1}
          >
            {title}
          </Text>

          {subtitle ? (
            <Text
              style={[styles.subtitle, { color: colors.textSecondary }]}
              numberOfLines={1}
            >
              {subtitle}
            </Text>
          ) : null}
        </View>

        <Text
          style={[styles.amount, { color: amountColor ?? colors.textPrimary }]}
        >
          {amount}
        </Text>
      </View>
    </BaseCard>
  );
};

export default TransactionCard;
