
import { StyleSheet } from 'react-native';
import { spacing, radius } from '../../../constants/spacing';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    content: {
        padding: spacing.lg,
        paddingBottom: spacing.xxxl,
    },

    header: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: spacing.md,
        marginBottom: spacing.xxl,
    },

    backButton: {
        width: 40,
        height: 40,
        borderRadius: radius.md,
        alignItems: 'center',
        justifyContent: 'center',
    },

    headerContent: {
        flex: 1,
    },

    heading: {
        fontSize: 24,
        fontWeight: '700',
    },

    subtitle: {
        fontSize: 13,
        lineHeight: 20,
        marginTop: spacing.xs,
    },

    sectionHeader: {
        marginTop: spacing.lg,
        marginBottom: spacing.md,
    },

    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
    },

    sectionDescription: {
        fontSize: 13,
        lineHeight: 19,
        marginTop: spacing.xs,
    },

    previewCard: {
        padding: spacing.lg,
        borderWidth: 1,
        borderRadius: radius.xl,
        gap: spacing.xl,
    },

    progressItem: {
        gap: spacing.sm,
    },

    progressHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    progressTitle: {
        fontSize: 13,
        fontWeight: '600',
    },

    progressValue: {
        fontSize: 12,
        fontWeight: '600',
    },

    footer: {
        fontSize: 11,
        textAlign: 'center',
        marginTop: spacing.xxxl,
    },
});
