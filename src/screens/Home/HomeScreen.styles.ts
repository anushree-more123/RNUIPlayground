
import { StyleSheet } from 'react-native';
import { spacing, radius } from '../../constants/spacing';

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },

    scrollContent: {
        paddingHorizontal: spacing.xl,
        paddingTop: spacing.md,
        paddingBottom: spacing.xxl,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: spacing.xxl,
    },

    greeting: {
        fontSize: 10,
        fontWeight: '700',
        letterSpacing: 1.5,
        marginBottom: spacing.xs + 1,
    },

    appTitle: {
        fontSize: 23,
        fontWeight: '800',
    },

    themeButton: {
        height: 44,
        width: 44,
        borderRadius: radius.md + 2,
        alignItems: 'center',
        justifyContent: 'center',
    },

    heroCard: {
        borderRadius: radius.xl + 2,
        padding: spacing.xl + 2,
        marginBottom: spacing.xl + 2,
    },

    heroLabel: {
        fontSize: 10,
        fontWeight: '700',
        letterSpacing: 1.3,
        marginBottom: spacing.md,
    },

    heroTitle: {
        fontSize: 27,
        lineHeight: 34,
        fontWeight: '800',
        marginBottom: spacing.sm + 2,
    },

    heroDescription: {
        fontSize: 13,
        lineHeight: 20,
        marginBottom: spacing.xl,
    },

    exploreButton: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: spacing.lg,
        paddingVertical: spacing.md,
        borderRadius: radius.md,
        gap: spacing.sm + 2,
    },

    exploreText: {
        fontSize: 12,
        fontWeight: '700',
    },

    searchContainer: {
        height: 52,
        borderRadius: radius.md + 2,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: spacing.md + 3,
        marginBottom: spacing.xxxl - spacing.xs,
    },

    searchInput: {
        flex: 1,
        fontSize: 13,
        marginLeft: spacing.md,
        paddingVertical: 0,
    },

    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: spacing.lg,
    },

    sectionTitle: {
        fontSize: 18,
        fontWeight: '800',
        marginBottom: spacing.xs + 1,
    },

    sectionSubtitle: {
        fontSize: 11,
    },

    categoryGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: -spacing.xs - 2,
    },

    categoryItem: {
        width: '50%',
        paddingHorizontal: spacing.xs + 2,
        paddingBottom: spacing.md,
    },

    emptyText: {
        textAlign: 'center',
        marginTop: spacing.xxxl - spacing.xs,
        fontSize: 13,
    },
});
