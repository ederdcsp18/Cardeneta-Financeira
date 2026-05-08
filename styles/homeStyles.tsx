import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f9f9fb'
    },
    header: {
        marginBottom: 16,
        borderRadius: 12,
        padding: 18,
        backgroundColor: '#024100'
    },
    title: {
        color: '#ffffff',
        fontSize: 16,
        marginBottom: 8
    },
    total: {
        color: '#ffffff',
        fontSize: 28,
        fontWeight: '700'
    },
    addButton: {
        marginBottom: 12,
        paddingVertical: 14,
        borderRadius: 10,
        backgroundColor: '#520014',
        alignItems: 'center'
    },
    addButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600'
    },
    listContainer: {
        paddingBottom: 24
    },
    itemCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        marginBottom: 12,
        borderRadius: 12,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2
    },
    itemDescription: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4
    },
    itemAmount: {
        fontSize: 14,
        color: '#555'
    },
    deleteButton: {
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 8,
        backgroundColor: '#ea4335'
    },
    deleteButtonText: {
        color: '#ffffff',
        fontWeight: '600'
    },
    emptyContainer: {
        marginTop: 32,
        alignItems: 'center'
    },
    emptyText: {
        color: '#666',
        fontSize: 16
    }
});
