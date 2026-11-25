
import { StyleSheet } from 'react-native';

import { spacing } from '../../../../constants/spacing';

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    circularProgressContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },

    circularCenterContent: {
        ...StyleSheet.absoluteFill,
        alignItems: 'center',
        justifyContent: 'center',
        padding: spacing.sm,
    },

    circularTitle: {
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: spacing.xs,
    },

    circularPercent: {
        fontWeight: '700',
        textAlign: 'center',
    },
});
