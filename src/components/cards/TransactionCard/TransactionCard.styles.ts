
import { StyleSheet } from 'react-native';
import { spacing, radius } from '../../../constants/spacing';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
    },

    content: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.md,
    },

    iconContainer: {
        width: 38,
        height: 38,
        borderRadius: radius.md,
        alignItems: 'center',
        justifyContent: 'center',
    },

    details: {
        flex: 1,
        gap: spacing.xs,
    },

    title: {
        fontSize: 13,
        fontWeight: '600',
    },

    subtitle: {
        fontSize: 11,
    },

    amount: {
        fontSize: 13,
        fontWeight: '700',
    },
});
