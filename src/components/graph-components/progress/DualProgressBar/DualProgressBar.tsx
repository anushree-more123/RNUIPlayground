import React from 'react';
import { Text, View, StyleProp, ViewStyle, TextStyle } from 'react-native';

import Svg, { Defs, Pattern, Line, Rect } from 'react-native-svg';

import { useAppTheme } from '../../../../theme/ThemeContext';
import { styles } from './DualProgressBar.styles';

export type DualProgressBarSize = 'thin' | 'thick';

export interface DualProgressBarProps {
  percent1: number;
  percent2: number;

  label1?: string;
  label2?: string;

  color1?: string;
  color2?: string;
  trackColor?: string;
  stripeColor?: string;

  size?: DualProgressBarSize;
  height?: number;

  showLabels?: boolean;
  rounded?: boolean;

  containerStyle?: StyleProp<ViewStyle>;
  trackStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

const DualProgressBar: React.FC<DualProgressBarProps> = ({
  percent1,
  percent2,
  label1 = 'Completed',
  label2 = 'Pending',
  color1,
  color2,
  trackColor,
  stripeColor = '#E2E8F0',
  size = 'thin',
  height,
  showLabels = true,
  rounded = true,
  containerStyle,
  trackStyle,
  labelStyle,
}) => {
  const { colors } = useAppTheme();

  const normalize = (value: number) =>
    Number.isFinite(value) ? Math.max(0, Math.min(value, 100)) : 0;

  const firstPercent = normalize(percent1);

  const secondPercent = Math.min(normalize(percent2), 100 - firstPercent);

  const remainingPercent = Math.max(0, 100 - firstPercent - secondPercent);

  const firstColor = color1 ?? colors.accent;
  const secondColor = color2 ?? colors.success;
  const remainingColor = trackColor ?? '#F8FAFC';

  const resolvedHeight = height ?? (size === 'thin' ? 6 : 12);
  const borderRadius = rounded ? 100 : 0;

  return (
    <View style={[styles.container, containerStyle]}>
      {/* Dual Progress Track */}
      <View
        style={[
          styles.track,
          {
            height: resolvedHeight,
            backgroundColor: remainingColor,
            borderRadius,
          },
          trackStyle,
        ]}
      >
        {/* First Progress */}
        {firstPercent > 0 && (
          <View
            style={[
              styles.progressSegment,
              {
                width: `${firstPercent}%`,
                backgroundColor: firstColor,
              },
            ]}
          />
        )}

        {/* Second Progress */}
        {secondPercent > 0 && (
          <View
            style={[
              styles.progressSegment,
              {
                width: `${secondPercent}%`,
                backgroundColor: secondColor,
              },
            ]}
          />
        )}

        {/* Remaining Striped Track */}
        {remainingPercent > 0 && (
          <View
            style={[styles.remainingTrack, { backgroundColor: remainingColor }]}
          >
            <Svg width="100%" height="100%" style={styles.stripeSvg}>
              <Defs>
                <Pattern
                  id="dualProgressStripe"
                  patternUnits="userSpaceOnUse"
                  width={8}
                  height={8}
                >
                  <Line
                    x1={8}
                    y1={0}
                    x2={0}
                    y2={8}
                    stroke={stripeColor}
                    strokeWidth={1}
                  />
                </Pattern>
              </Defs>

              <Rect
                x={0}
                y={0}
                width="100%"
                height="100%"
                fill="url(#dualProgressStripe)"
              />
            </Svg>
          </View>
        )}
      </View>

      {/* Labels */}
      {showLabels && (
        <View style={styles.labelContainer}>
          <View style={styles.labelWrapper}>
            <View
              style={[styles.labelColor, { backgroundColor: firstColor }]}
            />

            <View style={styles.labelContent}>
              <Text
                style={[
                  styles.labelText,
                  { color: colors.textSecondary },
                  labelStyle,
                ]}
                numberOfLines={1}
              >
                {label1}
              </Text>

              <Text
                style={[
                  styles.percentageText,
                  { color: colors.textPrimary },
                  labelStyle,
                ]}
              >
                {firstPercent}%
              </Text>
            </View>
          </View>

          <View style={styles.labelWrapper}>
            <View
              style={[styles.labelColor, { backgroundColor: secondColor }]}
            />

            <View style={styles.labelContent}>
              <Text
                style={[
                  styles.labelText,
                  { color: colors.textSecondary },
                  labelStyle,
                ]}
                numberOfLines={1}
              >
                {label2}
              </Text>

              <Text
                style={[
                  styles.percentageText,
                  { color: colors.textPrimary },
                  labelStyle,
                ]}
              >
                {secondPercent}%
              </Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default DualProgressBar;
