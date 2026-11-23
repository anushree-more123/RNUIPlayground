import { StyleSheet } from 'react-native';
import { spacing, radius } from '../../../constants/spacing';

export const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    gap: spacing.xs,
    borderWidth: 1,
  },

  small: {
    minHeight: 22,
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
  },

  medium: {
    minHeight: 28,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
  },

  large: {
    minHeight: 34,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },

  rounded: {
    borderRadius: radius.sm,
  },

  pill: {
    borderRadius: radius.round,
  },

  square: {
    borderRadius: 2,
  },

  label: {
    fontWeight: '600',
  },

  smallLabel: {
    fontSize: 10,
  },

  mediumLabel: {
    fontSize: 12,
  },

  largeLabel: {
    fontSize: 14,
  },

  dot: {
    borderRadius: radius.round,
  },

  smallDot: {
    width: 6,
    height: 6,
  },

  mediumDot: {
    width: 7,
    height: 7,
  },

  largeDot: {
    width: 9,
    height: 9,
  },
});
