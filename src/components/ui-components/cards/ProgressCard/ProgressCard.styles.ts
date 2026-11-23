
import { StyleSheet } from 'react-native';
import { spacing, radius } from '../../../../constants/spacing';
import { FONT_SIZE } from '../../../../constants/font-size';

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
        fontSize: FONT_SIZE.md,
        fontWeight: '700',
    },

    description: {
        fontSize: FONT_SIZE.xs,
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
        fontSize: FONT_SIZE.xs,
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
