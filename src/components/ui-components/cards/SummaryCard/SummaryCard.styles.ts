
import { StyleSheet } from 'react-native';
import { spacing, radius } from '../../../../constants/spacing';
import { FONT_SIZE } from '../../../../constants/font-size';

export const styles = StyleSheet.create({
    container: {
        padding: spacing.sm,
    },

    highlight: {
        padding: spacing.lg,
        borderRadius: radius.md,
        gap: spacing.sm,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },

    titleContainer: {
        flex: 1,
        gap: spacing.xs,
    },

    title: {
        fontSize: FONT_SIZE.sm,
    },

    amount: {
        fontSize: 27,
        fontWeight: '800',
    },

    changeBadge: {
        alignSelf: 'flex-start',
        paddingHorizontal: spacing.sm,
        paddingVertical: spacing.xs,
        borderRadius: radius.round,
    },

    changeText: {
        fontSize: 10,
        fontWeight: '700',
    },

    description: {
        fontSize: FONT_SIZE.xs,
        lineHeight: 16,
    },

    children: {
        paddingTop: spacing.sm,
    },
});
