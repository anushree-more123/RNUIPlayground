
import { StyleSheet } from 'react-native';
import { spacing } from '../../../../constants/spacing';
import { FONT_SIZE } from '../../../../constants/font-size';

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
        fontSize: FONT_SIZE.sm,
        fontWeight: '500',
    },

    amount: {
        fontSize: 25,
        fontWeight: '800',
    },

    subtitle: {
        fontSize: FONT_SIZE.xs,
    },
});
