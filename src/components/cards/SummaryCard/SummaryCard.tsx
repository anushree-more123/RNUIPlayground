import React from 'react';
import { Text, View, StyleProp, ViewStyle } from 'react-native';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faWallet } from '@fortawesome/free-solid-svg-icons';

import AppIcon from '../../common/AppIcon';
import BaseCard from '../BaseCard/BaseCard';
import { useAppTheme } from '../../../theme/ThemeContext';
import { styles } from './SummaryCard.styles';

export interface SummaryCardProps {
  title: string;
  amount: string;
  change?: string;
  description?: string;
  icon?: IconProp;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  amount,
  change,
  description,
  icon = faWallet,
  children,
  style,
}) => {
  const { colors } = useAppTheme();

  return (
    <BaseCard style={[styles.container, style]}>
      <View style={[styles.highlight, { backgroundColor: colors.accentLight }]}>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={[styles.title, { color: colors.textSecondary }]}>
              {title}
            </Text>
            <Text style={[styles.amount, { color: colors.textPrimary }]}>
              {amount}
            </Text>
          </View>

          <AppIcon icon={icon} color={colors.accent} size={22} />
        </View>

        {change ? (
          <View
            style={[
              styles.changeBadge,
              { backgroundColor: colors.successBackground },
            ]}
          >
            <Text style={[styles.changeText, { color: colors.success }]}>
              {change}
            </Text>
          </View>
        ) : null}

        {description ? (
          <Text style={[styles.description, { color: colors.textSecondary }]}>
            {description}
          </Text>
        ) : null}
      </View>

      {children ? <View style={styles.children}>{children}</View> : null}
    </BaseCard>
  );
};

export default SummaryCard;
