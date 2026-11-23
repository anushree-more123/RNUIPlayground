
import { StyleSheet } from 'react-native';
import { spacing, radius } from '../../../constants/spacing';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        minWidth: 0,
        justifyContent: 'space-between',
        gap: spacing.sm,
    },

    title: {
        fontSize: 12,
        fontWeight: '500',
    },

    valueRow: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: spacing.xs,
    },

    value: {
        fontSize: 25,
        fontWeight: '800',
    },

    changeBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.xs,
        borderRadius: radius.round,
        paddingHorizontal: spacing.sm,
        paddingVertical: spacing.xs,
    },

    change: {
        fontSize: 10,
        fontWeight: '700',
    },

    description: {
        fontSize: 11,
        lineHeight: 16,
    },
});
