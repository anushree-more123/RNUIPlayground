import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Text,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

import Svg, { Circle } from 'react-native-svg';

import { useAppTheme } from '../../../../theme/ThemeContext';
import { styles } from './PrimaryCircularProgressChart.styles';

export interface PrimaryCircularProgressChartProps {
  /** Main progress value from 0 to 100 */
  progress: number;

  /** Chart dimensions */
  size?: number;

  /** Main progress ring thickness */
  stroke?: number;

  /** Main progress color */
  color?: string;

  /** Main track background color */
  trackColor?: string;

  /** Optional title displayed above the percentage */
  title?: string;

  /** Show percentage in the center */
  showPercent?: boolean;

  /** Show percentage symbol */
  showPercentUnit?: boolean;

  /** Center percentage font size */
  percentTextSize?: number;

  /** Title font size */
  titleFontSize?: number;

  /** Percentage text color */
  percentColor?: string;

  /** Animate progress on mount and when values change */
  animate?: boolean;

  /** Animation duration in milliseconds */
  animationDuration?: number;

  /** Display outer circle track */
  showOuterCircle?: boolean;

  /** Display outer progress ring */
  showProgressOuterCircle?: boolean;

  /** Outer progress value from 0 to 100 */
  outerProgress?: number;

  /** Outer circle stroke width */
  outerStroke?: number;

  /** Space between inner and outer circles */
  outerGap?: number;

  /** Outer progress color */
  outerCircleColor?: string;

  /** Outer circle track color */
  outerCircleBackground?: string;

  /** Container styling */
  containerStyle?: StyleProp<ViewStyle>;

  /** Title styling */
  titleStyle?: StyleProp<TextStyle>;

  /** Percentage styling */
  percentStyle?: StyleProp<TextStyle>;
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const PrimaryCircularProgressChart: React.FC<
  PrimaryCircularProgressChartProps
> = ({
  progress,
  size = 140,
  stroke = 10,
  color,
  trackColor,
  title,
  showPercent = true,
  showPercentUnit = true,
  percentTextSize,
  titleFontSize,
  percentColor,
  animate = true,
  animationDuration = 800,
  showOuterCircle = false,
  showProgressOuterCircle = false,
  outerProgress,
  outerStroke = 6,
  outerGap = 8,
  outerCircleColor,
  outerCircleBackground,
  containerStyle,
  titleStyle,
  percentStyle,
}) => {
  const { colors } = useAppTheme();

  const normalizeProgress = (value: number) =>
    Number.isFinite(value) ? Math.min(Math.max(value, 0), 100) : 0;

  const normalizedProgress = normalizeProgress(progress);

  const normalizedOuterProgress = normalizeProgress(outerProgress ?? progress);

  const animatedValue = useRef(
    new Animated.Value(animate ? 0 : normalizedProgress),
  ).current;

  const animatedOuterValue = useRef(
    new Animated.Value(animate ? 0 : normalizedOuterProgress),
  ).current;

  useEffect(() => {
    if (animate) {
      Animated.timing(animatedValue, {
        toValue: normalizedProgress,
        duration: animationDuration,
        useNativeDriver: false,
      }).start();

      Animated.timing(animatedOuterValue, {
        toValue: normalizedOuterProgress,
        duration: animationDuration,
        useNativeDriver: false,
      }).start();
    } else {
      animatedValue.setValue(normalizedProgress);
      animatedOuterValue.setValue(normalizedOuterProgress);
    }
  }, [
    normalizedProgress,
    normalizedOuterProgress,
    animate,
    animationDuration,
    animatedValue,
    animatedOuterValue,
  ]);

  const center = size / 2;

  const resolvedOuterStroke = showOuterCircle ? outerStroke : 0;

  const outerRadius = center - resolvedOuterStroke / 2;

  const trackRadius = showOuterCircle
    ? outerRadius - outerGap - stroke / 2
    : center - stroke / 2;

  const safeTrackRadius = Math.max(0, trackRadius);

  const outerCircumference = 2 * Math.PI * outerRadius;
  const innerCircumference = 2 * Math.PI * safeTrackRadius;

  const outerStrokeDashoffset = animatedOuterValue.interpolate({
    inputRange: [0, 100],
    outputRange: [outerCircumference, 0],
  });

  const innerStrokeDashoffset = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [innerCircumference, 0],
  });

  const resolvedColor = color ?? colors.accent;
  const resolvedTrackColor = trackColor ?? colors.surfaceSecondary;

  const resolvedOuterColor = outerCircleColor ?? colors.success;

  const resolvedOuterBackground = outerCircleBackground ?? colors.border;

  const resolvedPercentSize =
    percentTextSize ?? Math.min(Math.max(size * 0.22, 14), 26);

  const resolvedTitleSize =
    titleFontSize ?? Math.min(Math.max(size * 0.22, 14), 16);

  return (
    <View style={[styles.container, containerStyle]}>
      <View
        style={[
          styles.circularProgressContainer,
          { width: size, height: size },
        ]}
      >
        <Svg width={size} height={size}>
          {/* Outer Circle Track */}
          {showOuterCircle && (
            <Circle
              cx={center}
              cy={center}
              r={outerRadius}
              stroke={resolvedOuterBackground}
              strokeWidth={outerStroke}
              fill="none"
            />
          )}

          {/* Outer Progress */}
          {showOuterCircle && showProgressOuterCircle && (
            <AnimatedCircle
              cx={center}
              cy={center}
              r={outerRadius}
              stroke={resolvedOuterColor}
              strokeWidth={outerStroke}
              strokeDasharray={outerCircumference}
              strokeDashoffset={outerStrokeDashoffset}
              strokeLinecap="round"
              fill="none"
              rotation={-90}
              origin={`${center}, ${center}`}
            />
          )}

          {/* Main Track Circle */}
          <Circle
            cx={center}
            cy={center}
            r={safeTrackRadius}
            stroke={resolvedTrackColor}
            strokeWidth={stroke}
            fill="none"
          />

          {/* Main Progress Circle */}
          <AnimatedCircle
            cx={center}
            cy={center}
            r={safeTrackRadius}
            stroke={resolvedColor}
            strokeWidth={stroke}
            strokeDasharray={innerCircumference}
            strokeDashoffset={innerStrokeDashoffset}
            strokeLinecap="round"
            fill="none"
            rotation={-90}
            origin={`${center}, ${center}`}
          />
        </Svg>

        {/* Center Content */}
        <View style={styles.circularCenterContent}>
          {title ? (
            <Text
              style={[
                styles.circularTitle,
                {
                  color: colors.textSecondary,
                  fontSize: resolvedTitleSize,
                },
                titleStyle,
              ]}
              numberOfLines={2}
            >
              {title}
            </Text>
          ) : null}

          {showPercent && (
            <Text
              style={[
                styles.circularPercent,
                {
                  color: percentColor ?? colors.textPrimary,
                  fontSize: resolvedPercentSize,
                },
                percentStyle,
              ]}
            >
              {Math.round(normalizedProgress)}
              {showPercentUnit ? '%' : ''}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default PrimaryCircularProgressChart;
