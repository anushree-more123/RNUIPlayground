
import { StyleSheet } from 'react-native';
import { spacing, radius } from '../../constants/spacing';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    content: {
        padding: spacing.lg,
        paddingBottom: spacing.xxxl,
    },

    header: {
        marginBottom: spacing.xxxl,
    },

    heading: {
        fontSize: 28,
        fontWeight: '700',
    },

    subtitle: {
        fontSize: 14,
        lineHeight: 21,
        marginTop: spacing.xs,
    },

    sectionHeader: {
        marginBottom: spacing.lg,
    },

    sectionTitle: {
        fontSize: 20,
        fontWeight: '700',
    },

    sectionDescription: {
        fontSize: 14,
        lineHeight: 21,
        marginTop: spacing.xs,
    },

    cardGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        rowGap: spacing.md,
    },

    categoryCard: {
        width: '48%',
        minHeight: 230,
        padding: spacing.lg,
        borderWidth: 1,
        borderRadius: radius.xl,
        justifyContent: 'flex-start',
    },

    iconContainer: {
        width: 64,
        height: 64,
        borderRadius: radius.lg,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: spacing.lg,
    },

    cardTitle: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: spacing.xs,
    },

    cardDescription: {
        fontSize: 13,
        lineHeight: 20,
        flex: 1,
    },

    cardFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: spacing.lg,
    },

    cardCount: {
        fontSize: 13,
        fontWeight: '700',
    },

    footer: {
        fontSize: 11,
        textAlign: 'center',
        marginTop: spacing.xxxl,
    },
});
