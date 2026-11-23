import React from 'react';
import { Text, View, StyleProp, ViewStyle } from 'react-native';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';

import AppIcon from '../../../common/AppIcon';
import BaseCard from '../BaseCard/BaseCard';
import { useAppTheme } from '../../../../theme/ThemeContext';
import { styles } from './PlanCard.styles';

export interface PlanCardProps {
  title: string;
  price: string;
  description?: string;
  period?: string;
  icon?: IconProp;
  featured?: boolean;
  actionLabel?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  price,
  description,
  period,
  icon = faLayerGroup,
  featured = false,
  actionLabel = 'View details',
  onPress,
  style,
}) => {
  const { colors } = useAppTheme();

  return (
    <BaseCard
      backgroundColor={featured ? colors.accentLight : colors.surface}
      borderColor={colors.border}
      style={[styles.container, style]}
      onPress={onPress}
    >
      <View
        style={[
          styles.iconContainer,
          { backgroundColor: featured ? colors.surface : colors.accentLight },
        ]}
      >
        <AppIcon icon={icon} color={colors.accent} size={18} />
      </View>

      {featured ? (
        <View
          style={[styles.featuredBadge, { backgroundColor: colors.accent }]}
        >
          <Text style={[styles.featuredText, { color: colors.textInverse }]}>
            Featured
          </Text>
        </View>
      ) : null}

      <View style={styles.details}>
        <Text style={[styles.title, { color: colors.textPrimary }]}>
          {title}
        </Text>

        {description ? (
          <Text style={[styles.description, { color: colors.textSecondary }]}>
            {description}
          </Text>
        ) : null}
      </View>

      <View style={styles.priceContainer}>
        <Text style={[styles.price, { color: colors.accent }]}>{price}</Text>

        {period ? (
          <Text style={[styles.period, { color: colors.textSecondary }]}>
            / {period}
          </Text>
        ) : null}
      </View>

      <Text style={[styles.actionLabel, { color: colors.accent }]}>
        {actionLabel} →
      </Text>
    </BaseCard>
  );
};

export default PlanCard;
