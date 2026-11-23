import { StyleSheet } from 'react-native';
import { FONT_SIZE } from '../../../constants/font-size';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: 175,
        borderWidth: 1,
        borderRadius: 18,
        padding: 16,
    },
    iconContainer: {
        width: 46,
        height: 46,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 14,
    },
    content: {
        flex: 1,
    },
    title: {
        fontSize: FONT_SIZE.lg,
        fontWeight: '700',
        marginBottom: 5,
    },
    description: {
        fontSize: FONT_SIZE.sm,
        lineHeight: 18,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 14,
    },
    count: {
        fontSize: FONT_SIZE.xs,
        fontWeight: '600',
    },
});