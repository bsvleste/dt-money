import { createContext, ReactNode, useEffect, useState } from "react";

interface TransactionsProps {
    id: number
    description: string
    type: 'income' | 'outcome'
    price: number
    category: string
    createAt: string
}

interface TransactionContextType {
    transactions: TransactionsProps[];
}
interface TransactionsroviderProps {
    children: ReactNode;
}
export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsroviderProps) {
    const [transactions, setTransactions] = useState<TransactionsProps[]>([])
    async function loadTransactions() {
        const response = await fetch('http://localhost:3333/transactions')
        const data = await response.json()
        setTransactions(data)
    }
    useEffect(() => {
        loadTransactions()
    }, [])
    return (
        <TransactionContext.Provider value={{ transactions }}>
            {children}
        </TransactionContext.Provider>
    )
}