
import { StyleSheet } from 'react-native';
import { spacing, radius } from '../../../constants/spacing';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        minWidth: 0,
        justifyContent: 'space-between',
        gap: spacing.md,
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: spacing.sm,
    },

    title: {
        flex: 1,
        fontSize: 14,
        fontWeight: '700',
    },

    description: {
        fontSize: 11,
        lineHeight: 16,
    },

    progressTrack: {
        width: '100%',
        height: 6,
        borderRadius: radius.round,
        overflow: 'hidden',
    },

    progressFill: {
        height: '100%',
        borderRadius: radius.round,
    },

    progressLabel: {
        fontSize: 11,
        fontWeight: '700',
    },

    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: spacing.sm,
    },

    countItem: {
        flex: 1,
        gap: spacing.xs,
    },

    count: {
        fontSize: 17,
        fontWeight: '800',
    },

    countLabel: {
        fontSize: 10,
    },
});
