import { FileSearch, MagnifyingGlass } from "phosphor-react"
import { useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { SearchForm } from "./components/SearchForm"
import { PriceHighlight, TransactionContainer, TransactionTable } from "./styles"

interface TransactionsProps {
    id: number
    description: string
    type: 'income' | 'outcome'
    price: number
    category: string
    createAt: string
}

export function Transaction(){
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
        <>
            <Header/>
            <Summary/>
            <TransactionContainer >
                <SearchForm/>                    
                <TransactionTable>
                    <tbody>
                        {
                            transactions.map(transaction => (
                                <tr key={transaction.id}>
                                    <td width="40%">{transaction.description}</td>
                                    <td>
                                        <PriceHighlight variant={transaction.type}>
                                            {transaction.price}
                                        </PriceHighlight>
                                    </td>
                                    <td>{transaction.category}</td>
                                    <td>{transaction.createAt}</td>
                                </tr>
                            ))
                        }


                    </tbody>
                </TransactionTable>
            </TransactionContainer>
        </>
    )
}