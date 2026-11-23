
import { StyleSheet } from 'react-native';
import { spacing, radius } from '../../../constants/spacing';
import { FONT_SIZE } from '../../../constants/font-size';

export const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: spacing.sm,
        alignSelf: 'flex-start',
    },

    small: {
        minHeight: 34,
        paddingHorizontal: spacing.md,
    },

    medium: {
        minHeight: 42,
        paddingHorizontal: spacing.lg + 2,
    },

    large: {
        minHeight: 50,
        paddingHorizontal: spacing.xl + 2,
    },

    rounded: {
        borderRadius: radius.md,
    },

    pill: {
        borderRadius: radius.round,
    },

    square: {
        borderRadius: radius.sm / 2,
    },

    iconOnly: {
        width: 42,
        height: 42,
        paddingHorizontal: 0,
    },

    label: {
        fontSize: FONT_SIZE.md,
        fontWeight: '600',
    },
});
