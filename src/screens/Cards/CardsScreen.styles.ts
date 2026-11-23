
import { StyleSheet } from 'react-native';
import { radius, spacing } from '../../constants/spacing';

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },

    scrollContent: {
        padding: spacing.lg,
        paddingBottom: spacing.xxxl,
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.md,
        marginBottom: spacing.xl,
    },

    heading: {
        fontSize: 28,
        fontWeight: '800',
        marginBottom: spacing.xs,
    },

    subtitle: {
        fontSize: 13,
        lineHeight: 19,
    },

    sectionHeader: {
        marginTop: spacing.xl,
        marginBottom: spacing.md,
    },

    sectionTitle: {
        fontSize: 17,
        fontWeight: '800',
        marginBottom: spacing.xs,
    },

    sectionDescription: {
        fontSize: 12,
        lineHeight: 18,
    },

    horizontalRow: {
        flexDirection: 'row',
        alignItems: 'stretch',
        gap: spacing.md,
    },

    transactionList: {
        gap: spacing.sm,
    },

    variationCard: {
        padding: spacing.lg,
        borderWidth: 1,
        borderRadius: 16,
        gap: spacing.xs,
    },

    variationTitle: {
        fontSize: 14,
        fontWeight: '700',
    },

    footer: {
        fontSize: 12,
        textAlign: 'center',
        marginTop: spacing.xxxl,
    },

    backButton: {
        width: 42,
        height: 42,
        borderRadius: radius.md,
        alignItems: 'center',
        justifyContent: 'center',
    },

    headerContent: {
        flex: 1,
    },
});
