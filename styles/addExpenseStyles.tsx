import { StyleSheet } from 'react-native';

export const addExpenseStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f9f9fb'
    },
    formGroup: {
        marginBottom: 16
    },
    label: {
        marginBottom: 8,
        fontSize: 16,
        fontWeight: '600'
    },
    input: {
        padding: 14,
        borderRadius: 12,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#ddd',
        fontSize: 16
    },
    saveButton: {
        marginTop: 8,
        paddingVertical: 16,
        borderRadius: 10,
        backgroundColor: '#042b5e',
        alignItems: 'center'
    },
    saveButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '700'
    },
    errorText: {
        marginBottom: 12,
        color: '#d93025',
        fontSize: 14,
        fontWeight: '600'
    }
});
