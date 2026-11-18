import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingTop: 12,
        paddingBottom: 24,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
    },
    greeting: {
        fontSize: 10,
        fontWeight: '700',
        letterSpacing: 1.5,
        marginBottom: 5,
    },
    appTitle: {
        fontSize: 23,
        fontWeight: '800',
    },
    themeButton: {
        height: 44,
        width: 44,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },
    heroCard: {
        borderRadius: 22,
        padding: 22,
        marginBottom: 22,
    },
    heroLabel: {
        fontSize: 10,
        fontWeight: '700',
        letterSpacing: 1.3,
        marginBottom: 12,
    },
    heroTitle: {
        fontSize: 27,
        lineHeight: 34,
        fontWeight: '800',
        marginBottom: 10,
    },
    heroDescription: {
        fontSize: 13,
        lineHeight: 20,
        marginBottom: 20,
    },
    exploreButton: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 12,
        gap: 10,
    },
    exploreText: {
        fontSize: 12,
        fontWeight: '700',
    },
    searchContainer: {
        height: 52,
        borderRadius: 14,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginBottom: 28,
    },
    searchInput: {
        flex: 1,
        fontSize: 13,
        marginLeft: 12,
        paddingVertical: 0,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '800',
        marginBottom: 5,
    },
    sectionSubtitle: {
        fontSize: 11,
    },
    categoryGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: -6,
    },
    categoryItem: {
        width: '50%',
        paddingHorizontal: 6,
        paddingBottom: 12,
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 30,
        fontSize: 13,
    },
});