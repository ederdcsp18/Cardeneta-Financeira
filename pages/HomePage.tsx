import { useCallback } from 'react';
import {
    FlatList,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useExpenses } from '@/components/ExpenseContext';
import { homeStyles } from '@/styles/homeStyles';

export default function HomePage(): JSX.Element {
    const router = useRouter();
    const { expenses, deleteExpense, total } = useExpenses();

    const handleDelete = useCallback((id: string): void => {
        deleteExpense(id);
    }, [deleteExpense]);

    const handleNavigateToForm = (): void => {
        router.push('/adicionar');
    };

    return (
        <SafeAreaView style={homeStyles.container}>
            <View style={homeStyles.header}>
                <Text style={homeStyles.title}>TOTAL GASTO</Text>
                <Text style={homeStyles.total}>R$ {total.toFixed(2)}</Text>
            </View>

            <TouchableOpacity
                style={homeStyles.addButton}
                onPress={handleNavigateToForm}
            >
                <Text style={homeStyles.addButtonText}>ADICIONAR GASTO</Text>
            </TouchableOpacity>

            {expenses.length === 0 ? (
                <View style={homeStyles.emptyContainer}>
                    <Text style={homeStyles.emptyText}>Nenhum gasto registrado ainda.</Text>
                </View>
            ) : (
                <FlatList
                    data={expenses}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={homeStyles.listContainer}
                    renderItem={({ item }) => (
                        <View style={homeStyles.itemCard}>
                            <View>
                                <Text style={homeStyles.itemDescription}>{item.description}</Text>
                                <Text style={homeStyles.itemAmount}>R$ {Number(item.amount).toFixed(2)}</Text>
                            </View>
                            <TouchableOpacity
                                style={homeStyles.deleteButton}
                                onPress={() => handleDelete(item.id)}
                            >
                                <Text style={homeStyles.deleteButtonText}>EXCLUIR</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            )}
        </SafeAreaView>
    );
}
