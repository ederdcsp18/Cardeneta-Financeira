import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Expense } from '@/components/types';

interface ExpenseContextType {
    expenses: Expense[];
    addExpense: (expense: Expense) => void;
    deleteExpense: (id: string) => void;
    total: number;
}

const ExpenseContext = createContext<ExpenseContextType | undefined>(undefined);

export function ExpenseProvider({ children }: { children: ReactNode }): JSX.Element {
    const [expenses, setExpenses] = useState<Expense[]>([]);

    const addExpense = (expense: Expense): void => {
        setExpenses((current) => [expense, ...current]);
    };

    const deleteExpense = (id: string): void => {
        setExpenses((current) => current.filter((item) => item.id !== id));
    };

    const total = expenses.reduce((sum, item) => sum + Number(item.amount), 0);

    return (
        <ExpenseContext.Provider value={{ expenses, addExpense, deleteExpense, total }}>
            {children}
        </ExpenseContext.Provider>
    );
}

export function useExpenses(): ExpenseContextType {
    const context = useContext(ExpenseContext);
    if (!context) {
        throw new Error('useExpenses must be used within ExpenseProvider');
    }
    return context;
}
