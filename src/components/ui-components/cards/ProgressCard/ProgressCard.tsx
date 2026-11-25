import React from 'react';
import { Text, View, StyleProp, ViewStyle } from 'react-native';

import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

import AppIcon from '../../../common/AppIcon';
import BaseCard from '../BaseCard/BaseCard';

import { useAppTheme } from '../../../../theme/ThemeContext';
import { styles } from './ProgressCard.styles';
import ProgressBar from '../../../graph-components/progress/ProgressBar/ProgressBar';

export interface ProgressCardProps {
  title: string;
  completed: number;
  pending: number;
  progress: number;
  description?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const ProgressCard: React.FC<ProgressCardProps> = ({
  title,
  completed,
  pending,
  progress,
  description,
  onPress,
  style,
}) => {
  const { colors } = useAppTheme();

  const normalizedProgress = Number.isFinite(progress)
    ? Math.max(0, Math.min(progress, 100))
    : 0;

  return (
    <BaseCard style={[styles.container, style]} onPress={onPress}>
      <View style={styles.header}>
        <Text
          style={[styles.title, { color: colors.textPrimary }]}
          numberOfLines={1}
        >
          {title}
        </Text>

        <AppIcon icon={faEllipsis} color={colors.textSecondary} size={17} />
      </View>

      {description ? (
        <Text
          style={[styles.description, { color: colors.textSecondary }]}
          numberOfLines={2}
        >
          {description}
        </Text>
      ) : null}

      <ProgressBar
        percent={normalizedProgress}
        label={`${normalizedProgress}% completed`}
        labelPosition="top"
        color={colors.accent}
        showPercent
      />

      <View style={styles.footer}>
        <View style={styles.countItem}>
          <Text style={[styles.count, { color: colors.textPrimary }]}>
            {completed}
          </Text>

          <Text style={[styles.countLabel, { color: colors.textSecondary }]}>
            Completed
          </Text>
        </View>

        <View style={styles.countItem}>
          <Text style={[styles.count, { color: colors.textPrimary }]}>
            {pending}
          </Text>

          <Text style={[styles.countLabel, { color: colors.textSecondary }]}>
            Pending
          </Text>
        </View>
      </View>
    </BaseCard>
  );
};

export default ProgressCard;
