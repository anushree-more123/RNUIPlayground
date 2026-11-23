
import { StyleSheet } from 'react-native';
import { spacing, radius } from '../../../../constants/spacing';

export const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderRadius: radius.lg,
        padding: spacing.lg,
        overflow: 'hidden',
    },

    outlined: {
        borderWidth: 1.5,
    },

    elevated: {
        borderWidth: 0,
        elevation: 3,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        shadowRadius: 8,
    },

    pressed: {
        opacity: 0.88,
    },
});
