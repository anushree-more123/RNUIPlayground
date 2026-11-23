
import { StyleSheet } from 'react-native';
import { spacing, radius } from '../../../../constants/spacing';
import { FONT_SIZE } from '../../../../constants/font-size';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        minWidth: 0,
        justifyContent: 'space-between',
        gap: spacing.sm,
    },

    title: {
        fontSize: FONT_SIZE.sm,
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
        fontSize: FONT_SIZE.xs,
        lineHeight: 16,
    },
});
