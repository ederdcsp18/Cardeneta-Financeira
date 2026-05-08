import { useState } from 'react';
import {
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useExpenses } from '@/components/ExpenseContext';
import { Expense } from '@/components/types';
import { addExpenseStyles } from '@/styles/addExpenseStyles';

export default function AddExpensePage(): JSX.Element {
    const router = useRouter();
    const { addExpense } = useExpenses();
    const [description, setDescription] = useState<string>('');
    const [value, setValue] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleSave = (): void => {
        const trimmedDescription = description.trim();
        const numericValue = parseFloat(value.replace(',', '.'));

        if (trimmedDescription.length === 0) {
            setError('A descrição não pode ficar vazia.');
            return;
        }

        if (Number.isNaN(numericValue) || numericValue <= 0) {
            setError('O valor precisa ser maior que zero.');
            return;
        }

        const newExpense: Expense = {
            id: String(Date.now()),
            description: trimmedDescription,
            amount: numericValue
        };

        addExpense(newExpense);
        setDescription('');
        setValue('');
        setError('');
        router.back();
    };

    return (
        <SafeAreaView style={addExpenseStyles.container}>
            <View style={addExpenseStyles.formGroup}>
                <Text style={addExpenseStyles.label}>DESCRIÇÃO</Text>
                <TextInput
                    style={addExpenseStyles.input}
                    value={description}
                    onChangeText={setDescription}
                    placeholder="Ex: Almoço"
                    placeholderTextColor="#999"
                />
            </View>

            <View style={addExpenseStyles.formGroup}>
                <Text style={addExpenseStyles.label}>VALOR</Text>
                <TextInput
                    style={addExpenseStyles.input}
                    value={value}
                    onChangeText={setValue}
                    placeholder="Ex: 42.90"
                    placeholderTextColor="#999"
                    keyboardType="numeric"
                />
            </View>

            {error ? <Text style={addExpenseStyles.errorText}>{error}</Text> : null}

            <TouchableOpacity style={addExpenseStyles.saveButton} onPress={handleSave}>
                <Text style={addExpenseStyles.saveButtonText}>SALVAR</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
