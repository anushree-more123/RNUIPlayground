
import { StyleSheet } from 'react-native';

import { spacing } from '../../../../constants/spacing';
import { FONT_SIZE } from '../../../../constants/font-size';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        gap: spacing.md,
    },

    track: {
        width: '100%',
        overflow: 'hidden',
        flexDirection: 'row',
        position: 'relative',
    },

    progressSegment: {
        height: '100%',
        flexShrink: 0,
    },

    remainingTrack: {
        flex: 1,
        minWidth: 0,
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
    },

    stripeSvg: {
        ...StyleSheet.absoluteFill,
    },

    labelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: spacing.lg,
    },

    labelWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: spacing.sm,
    },

    labelColor: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginTop: 4,
    },

    labelContent: {
        flex: 1,
        gap: spacing.xs,
    },

    labelText: {
        fontSize: FONT_SIZE.xs,
        fontWeight: '500',
    },

    percentageText: {
        fontSize: FONT_SIZE.sm,
        fontWeight: '700',
    },
});
