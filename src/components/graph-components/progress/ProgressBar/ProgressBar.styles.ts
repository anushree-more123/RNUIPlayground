
import { StyleSheet } from 'react-native';
import { spacing } from '../../../../constants/spacing';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        gap: spacing.xs,
    },

    labelContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },

    percentageLabel: {
        fontWeight: '600',
    },

    thinLabel: {
        fontSize: 11,
    },

    thickLabel: {
        fontSize: 12,
    },


    track: {
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
        flexDirection: 'row',
    },

    progress: {
        height: '100%',
        zIndex: 2,
    },

    middleLabelContainer: {
        ...StyleSheet.absoluteFill,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 3,
    },


    stripedTrack: {
        ...StyleSheet.absoluteFill,
        overflow: 'hidden',
        justifyContent: 'center',
    },

    stripeRow: {
        position: 'absolute',
        top: -10,
        bottom: -10,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    middleLabel: {
        fontSize: 9,
        fontWeight: '700',
    },


    stripeContainer: {
        ...StyleSheet.absoluteFill,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        overflow: 'hidden',
        zIndex: 1,
    },
    stripe: {
        width: 1,
        height: '160%',
        opacity: 1,
        transform: [{ rotate: '35deg' }],
    },

});
