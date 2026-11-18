
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    screenContainer: {
        flex: 1,
    },
    tabBar: {
        height: 68,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        paddingHorizontal: 4,
    },
    tabItem: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
    },
    tabLabel: {
        fontSize: 10,
    },
    activeIndicator: {
        position: 'absolute',
        top: 0,
        width: 24,
        height: 3,
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
    },
    placeholder: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    placeholderTitle: {
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 8,
    },
    placeholderDescription: {
        fontSize: 13,
    },
});
