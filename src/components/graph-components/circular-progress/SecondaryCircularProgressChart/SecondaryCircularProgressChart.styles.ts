
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    circularProgressContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },

    circularCenterContent: {
        ...StyleSheet.absoluteFill,
        alignItems: 'center',
        justifyContent: 'center',
    },

    circularPercent: {
        fontWeight: '700',
        textAlign: 'center',
    },
});
