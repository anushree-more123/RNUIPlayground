
import { StyleSheet } from 'react-native';
import { spacing, radius } from '../../../../constants/spacing';
import { FONT_SIZE } from '../../../../constants/font-size';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        minWidth: 0,
        minHeight: 180,
        justifyContent: 'space-between',
        gap: spacing.md,
    },

    iconContainer: {
        width: 38,
        height: 38,
        borderRadius: radius.md,
        alignItems: 'center',
        justifyContent: 'center',
    },

    featuredBadge: {
        position: 'absolute',
        top: spacing.md,
        right: spacing.md,
        paddingHorizontal: spacing.sm,
        paddingVertical: spacing.xs,
        borderRadius: radius.round,
    },

    featuredText: {
        fontSize: 9,
        fontWeight: '700',
    },

    details: {
        gap: spacing.xs,
    },

    title: {
        fontSize: FONT_SIZE.md,
        fontWeight: '700',
    },

    description: {
        fontSize: FONT_SIZE.xs,
        lineHeight: 16,
    },

    priceContainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
        flexWrap: 'wrap',
    },

    price: {
        fontSize: 21,
        fontWeight: '800',
    },

    period: {
        fontSize: FONT_SIZE.xs,
    },

    actionLabel: {
        fontSize: FONT_SIZE.xs,
        fontWeight: '700',
    },
});
