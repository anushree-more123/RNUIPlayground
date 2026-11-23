import React from 'react';
import { View, Text, StyleProp, ViewStyle, TextStyle } from 'react-native';

import { useAppTheme } from '../../../../theme/ThemeContext';
import { styles } from './ProgressBar.styles';

export type ProgressBarSize = 'thin' | 'thick';
export type ProgressLabelPosition = 'top' | 'middle' | 'bottom';

export interface ProgressBarProps {
  /** Progress value between 0 and 100 */
  percent: number;

  /** Bar thickness */
  size?: ProgressBarSize;

  /** Where to display the percentage label */
  labelPosition?: ProgressLabelPosition;

  /** Display the percentage label */
  showPercent?: boolean;

  /** Color of the filled portion */
  color?: string;

  /** Background color of the unfilled portion */
  trackColor?: string;

  /** Color of the percentage label */
  labelColor?: string;

  /** Height override */
  height?: number;

  /** Rounded or square bar corners */
  rounded?: boolean;

  /** Display diagonal stripes in the remaining track */
  stripedTrack?: boolean;

  /** Display a custom label instead of the percentage */
  label?: string;

  /** Container styling */
  containerStyle?: StyleProp<ViewStyle>;

  /** Track styling */
  trackStyle?: StyleProp<ViewStyle>;

  /** Label styling */
  labelStyle?: StyleProp<TextStyle>;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  percent,
  size = 'thin',
  labelPosition = 'top',
  showPercent = true,
  color,
  trackColor,
  labelColor,
  height,
  rounded = true,
  stripedTrack = true,
  label,
  containerStyle,
  trackStyle,
  labelStyle,
}) => {
  const { colors } = useAppTheme();

  const clampedPercent = Number.isFinite(percent)
    ? Math.max(0, Math.min(100, percent))
    : 0;

  const progressColor = color ?? colors.accent;
  const remainingColor = trackColor ?? '#F8FAFC';
  const resolvedHeight = height ?? (size === 'thin' ? 6 : 12);

  const displayLabel = label ?? `${Math.round(clampedPercent)}%`;

  const radius = rounded ? 100 : 0;

  const percentageLabel = showPercent ? (
    <Text
      style={[
        styles.percentageLabel,
        styles[`${size}Label`],
        { color: labelColor ?? colors.textSecondary },
        labelStyle,
      ]}
    >
      {displayLabel}
    </Text>
  ) : null;

  return (
    <View style={[styles.container, containerStyle]}>
      {labelPosition === 'top' && (
        <View style={styles.labelContainer}>{percentageLabel}</View>
      )}

      <View
        style={[
          styles.track,
          {
            height: resolvedHeight,
            backgroundColor: remainingColor,
            borderRadius: radius,
          },
          trackStyle,
        ]}
      >
        {/* Stripes on the remaining gray section */}
        {stripedTrack && (
          <View pointerEvents="none" style={styles.stripeContainer}>
            {Array.from({ length: 40 }, (_, index) => (
              <View
                key={index}
                style={[
                  styles.stripe,
                  {
                    backgroundColor: '#E2E8F0',
                  },
                ]}
              />
            ))}
          </View>
        )}

        {/* Filled progress */}
        <View
          style={[
            styles.progress,
            {
              width: `${clampedPercent}%`,
              backgroundColor: progressColor,
              borderRadius: radius,
            },
          ]}
        />

        {labelPosition === 'middle' && showPercent && (
          <View style={styles.middleLabelContainer}>
            <Text
              style={[
                styles.middleLabel,
                { color: labelColor ?? colors.textInverse },
                labelStyle,
              ]}
            >
              {displayLabel}
            </Text>
          </View>
        )}
      </View>

      {labelPosition === 'bottom' && (
        <View style={styles.labelContainer}>{percentageLabel}</View>
      )}
    </View>
  );
};

export default ProgressBar;
