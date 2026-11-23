
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

    heading: {
        fontSize: 28,
        fontWeight: '800',
        marginBottom: spacing.xs,
    },

    subtitle: {
        fontSize: FONT_SIZE.md,
        lineHeight: 21,
    },

    sectionHeader: {
        marginTop: spacing.xl,
        marginBottom: spacing.md,
    },

    sectionTitle: {
        fontSize: 17,
        fontWeight: '700',
        marginBottom: spacing.xs,
    },

    sectionDescription: {
        fontSize: 13,
        lineHeight: 19,
    },

    previewCard: {
        borderWidth: 1,
        borderRadius: radius.lg,
        padding: spacing.lg,
        gap: spacing.lg,
    },

    horizontalRow: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: spacing.md,
    },

    fullWidth: {
        width: '100%',
        alignSelf: 'stretch',
    },

    footer: {
        textAlign: 'center',
        fontSize: FONT_SIZE.sm,
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
