
import { StyleSheet } from 'react-native';
import { spacing, radius } from '../../../constants/spacing';

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
        fontSize: 12,
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
        fontSize: 11,
        lineHeight: 16,
    },

    children: {
        paddingTop: spacing.sm,
    },
});
