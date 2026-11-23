import React from 'react';
import { Text, View, StyleProp, ViewStyle } from 'react-native';

import {
  faArrowTrendUp,
  faArrowTrendDown,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';

import AppIcon from '../../../common/AppIcon';
import BaseCard from '../BaseCard/BaseCard';
import { useAppTheme } from '../../../../theme/ThemeContext';
import { styles } from './MetricCard.styles';

export type MetricTrend = 'up' | 'down' | 'neutral';

export interface MetricCardProps {
  title: string;
  value: string;
  change?: string;
  description?: string;
  trend?: MetricTrend;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  description,
  trend = 'neutral',
  onPress,
  style,
}) => {
  const { colors } = useAppTheme();

  const trendColor =
    trend === 'up'
      ? colors.success
      : trend === 'down'
      ? colors.error
      : colors.textSecondary;

  const trendBackground =
    trend === 'up'
      ? colors.successBackground
      : trend === 'down'
      ? colors.errorBackground
      : colors.surfaceSecondary;

  const trendIcon =
    trend === 'up'
      ? faArrowTrendUp
      : trend === 'down'
      ? faArrowTrendDown
      : faMinus;

  return (
    <BaseCard style={[styles.container, style]} onPress={onPress}>
      <Text style={[styles.title, { color: colors.textSecondary }]}>
        {title}
      </Text>

      <View style={styles.valueRow}>
        <Text style={[styles.value, { color: colors.textPrimary }]}>
          {value}
        </Text>

        {change ? (
          <View
            style={[styles.changeBadge, { backgroundColor: trendBackground }]}
          >
            <AppIcon icon={trendIcon} size={10} color={trendColor} />
            <Text style={[styles.change, { color: trendColor }]}>{change}</Text>
          </View>
        ) : null}
      </View>

      {description ? (
        <Text style={[styles.description, { color: colors.textSecondary }]}>
          {description}
        </Text>
      ) : null}
    </BaseCard>
  );
};

export default MetricCard;
