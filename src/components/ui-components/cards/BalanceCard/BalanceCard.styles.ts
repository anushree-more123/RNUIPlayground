
import { StyleSheet } from 'react-native';
import { spacing } from '../../../../constants/spacing';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: 140,
        justifyContent: 'space-between',
        gap: spacing.md,
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    details: {
        gap: spacing.xs,
    },

    title: {
        fontSize: 12,
        fontWeight: '500',
    },

    amount: {
        fontSize: 25,
        fontWeight: '800',
    },

    subtitle: {
        fontSize: 11,
    },
});
