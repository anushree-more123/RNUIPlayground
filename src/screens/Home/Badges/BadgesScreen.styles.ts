
import { StyleSheet } from 'react-native';
import { spacing, radius } from '../../../constants/spacing';
import { FONT_SIZE } from '../../../constants/font-size';

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
        alignItems: 'center',
        gap: spacing.md,
        marginBottom: spacing.xl,
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

    heading: {
        fontSize: 26,
        fontWeight: '800',
        marginBottom: spacing.xs,
    },

    subtitle: {
        fontSize: FONT_SIZE.sm,
        lineHeight: 18,
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
        fontSize: FONT_SIZE.sm,
        lineHeight: 18,
    },

    previewCard: {
        padding: spacing.lg,
        borderWidth: 1,
        borderRadius: radius.lg,
        gap: spacing.md,
    },

    badgeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: spacing.sm,
    },

    footer: {
        fontSize: FONT_SIZE.sm,
        textAlign: 'center',
        marginTop: spacing.xxxl,
    },
});
