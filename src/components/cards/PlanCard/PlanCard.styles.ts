
import { StyleSheet } from 'react-native';
import { spacing, radius } from '../../../constants/spacing';

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
        fontSize: 14,
        fontWeight: '700',
    },

    description: {
        fontSize: 11,
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
        fontSize: 11,
    },

    actionLabel: {
        fontSize: 11,
        fontWeight: '700',
    },
});
