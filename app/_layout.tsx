import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ExpenseProvider } from '@/components/ExpenseContext';

export default function RootLayout(): JSX.Element {
    return (
        <ExpenseProvider>
            <>
                <StatusBar style="auto" />
                <Stack
                    screenOptions={{
                        headerTintColor: '#ffffff',
                        headerStyle: {
                            backgroundColor: '#024100'
                        },
                        headerTitleStyle: {
                            fontWeight: '700',
                            fontSize: 18
                        },
                        headerTitleAlign: 'center'
                    }}
                >
                    <Stack.Screen
                        name="index"
                        options={{
                            title: 'CONTROLE DE GASTOS',
                            headerShown: true
                        }}
                    />
                    <Stack.Screen
                        name="adicionar"
                        options={{
                            title: 'NOVO GASTO',
                            headerShown: true
                        }}
                    />
                </Stack>
            </>
        </ExpenseProvider>
    );
}
