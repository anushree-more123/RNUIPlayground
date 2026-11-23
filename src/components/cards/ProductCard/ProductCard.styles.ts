
import { StyleSheet } from 'react-native';
import { spacing, radius } from '../../../constants/spacing';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
    },

    content: {
        flexDirection: 'row',
        alignItems: 'stretch',
        gap: spacing.md,
    },

    imageContainer: {
        width: 104,
        minHeight: 108,
        borderRadius: radius.md,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },

    image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },

    details: {
        flex: 1,
        justifyContent: 'space-between',
        paddingVertical: spacing.xs,
    },

    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.xs,
    },

    title: {
        flex: 1,
        fontSize: 13,
        fontWeight: '700',
    },

    stockBadge: {
        borderRadius: radius.round,
        paddingHorizontal: spacing.sm,
        paddingVertical: spacing.xs,
    },

    stockText: {
        fontSize: 9,
        fontWeight: '600',
    },

    description: {
        fontSize: 11,
        lineHeight: 16,
        marginTop: spacing.xs,
    },

    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: spacing.sm,
    },

    price: {
        fontSize: 18,
        fontWeight: '800',
    },

    actionButton: {
        width: 34,
        height: 34,
        borderRadius: radius.round,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
