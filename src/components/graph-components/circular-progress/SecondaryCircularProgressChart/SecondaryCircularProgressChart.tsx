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
import { styles } from './SecondaryCircularProgressChart.styles';

export interface SecondaryCircularProgressChartProps {
  /** Progress value between 0 and 100 */
  progress: number;

  /** Chart dimensions */
  size?: number;

  /** Inner track thickness */
  innerStroke?: number;

  /** Outer progress ring thickness */
  outerStroke?: number;

  /** Gap between inner and outer circles */
  outerGap?: number;

  /** Outer progress color */
  color?: string;

  /** Inner track color */
  innerTrackColor?: string;

  /** Display outer progress ring */
  showProgressOuterCircle?: boolean;

  /** Display percentage in the center */
  showPercent?: boolean;

  /** Display percentage symbol */
  showPercentUnit?: boolean;

  /** Center percentage font size */
  percentTextSize?: number;

  /** Center percentage color */
  percentColor?: string;

  /** Animate progress */
  animate?: boolean;

  /** Animation duration in milliseconds */
  animationDuration?: number;

  /** Container styling */
  containerStyle?: StyleProp<ViewStyle>;

  /** Percentage text styling */
  percentStyle?: StyleProp<TextStyle>;
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const SecondaryCircularProgressChart: React.FC<
  SecondaryCircularProgressChartProps
> = ({
  progress,
  size = 140,
  innerStroke = 8,
  outerStroke = 8,
  outerGap = 8,
  color,
  innerTrackColor,
  showProgressOuterCircle = true,
  showPercent = true,
  showPercentUnit = true,
  percentTextSize,
  percentColor,
  animate = true,
  animationDuration = 800,
  containerStyle,
  percentStyle,
}) => {
  const { colors } = useAppTheme();

  const normalizedProgress = Number.isFinite(progress)
    ? Math.min(Math.max(progress, 0), 100)
    : 0;

  const center = size / 2;

  const outerRadius = center - outerStroke / 2;

  const trackRadius = Math.max(0, outerRadius - outerGap - innerStroke / 2);

  const outerCircumference = 2 * Math.PI * outerRadius;

  const animatedValue = useRef(
    new Animated.Value(animate ? 0 : normalizedProgress),
  ).current;

  useEffect(() => {
    if (animate) {
      const animation = Animated.timing(animatedValue, {
        toValue: normalizedProgress,
        duration: animationDuration,
        useNativeDriver: false,
      });

      animation.start();

      return () => animation.stop();
    }

    animatedValue.setValue(normalizedProgress);
  }, [normalizedProgress, animate, animationDuration, animatedValue]);

  const outerStrokeDashoffset = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [outerCircumference, 0],
  });

  const resolvedColor = color ?? colors.accent;
  const resolvedTrackColor = innerTrackColor ?? colors.surfaceSecondary;

  const resolvedPercentSize =
    percentTextSize ?? Math.min(Math.max(size * 0.22, 14), 30);

  return (
    <View style={[styles.circularProgressContainer, containerStyle]}>
      <Svg width={size} height={size}>
        {/* Outer Progress Ring */}
        {showProgressOuterCircle && (
          <AnimatedCircle
            cx={center}
            cy={center}
            r={outerRadius}
            stroke={resolvedColor}
            fill="none"
            strokeWidth={outerStroke}
            strokeDasharray={outerCircumference}
            strokeDashoffset={outerStrokeDashoffset}
            strokeLinecap="round"
            rotation={-90}
            origin={`${center}, ${center}`}
          />
        )}

        {/* Inner Track Circle */}
        <Circle
          cx={center}
          cy={center}
          r={trackRadius}
          stroke={resolvedTrackColor}
          strokeWidth={innerStroke}
          fill="none"
        />
      </Svg>

      {/* Center Percentage */}
      {showPercent && (
        <View style={styles.circularCenterContent}>
          <Text
            style={[
              styles.circularPercent,
              {
                fontSize: resolvedPercentSize,
                color: percentColor ?? colors.textPrimary,
              },
              percentStyle,
            ]}
          >
            {Math.round(normalizedProgress)}
            {showPercentUnit ? '%' : ''}
          </Text>
        </View>
      )}
    </View>
  );
};

export default SecondaryCircularProgressChart;
