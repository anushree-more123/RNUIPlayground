
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
        fontSize: FONT_SIZE.xxxl,
        fontWeight: '700',
    },

    subtitle: {
        fontSize: FONT_SIZE.sm,
        lineHeight: 20,
        marginTop: spacing.xs,
    },

    sectionHeader: {
        marginTop: spacing.lg,
        marginBottom: spacing.md,
    },

    sectionTitle: {
        fontSize: FONT_SIZE.xl,
        fontWeight: '700',
    },

    sectionDescription: {
        fontSize: FONT_SIZE.sm,
        lineHeight: 19,
        marginTop: spacing.xs,
    },

    previewCard: {
        padding: spacing.lg,
        borderWidth: 1,
        borderRadius: radius.xl,
        gap: spacing.xl,
    },

    exampleItem: {
        gap: spacing.md,
    },

    exampleTitle: {
        fontSize: FONT_SIZE.sm,
        fontWeight: '600',
    },

    footer: {
        fontSize: FONT_SIZE.xs,
        textAlign: 'center',
        marginTop: spacing.xxxl,
    },
});
