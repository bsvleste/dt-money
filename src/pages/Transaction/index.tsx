import { FileSearch, MagnifyingGlass } from "phosphor-react"
import { useContext, useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { TransactionContext } from "../../contexts/TransactionsCotext"
import { dateFormatter, priceFormatter } from "../../utils/formatters"
import { SearchForm } from "./components/SearchForm"
import { PriceHighlight, TransactionContainer, TransactionTable } from "./styles"


export function Transaction(){
    const { transactions } = useContext(TransactionContext)
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
                                            {
                                                transaction.type === 'outcome' && "- "
                                            }
                                            {priceFormatter.format(transaction.price)}
                                        </PriceHighlight>
                                    </td>
                                    <td>{transaction.category}</td>
                                    <td>{dateFormatter.format(new Date(transaction.createAt))}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </TransactionTable>
            </TransactionContainer>
        </>
    )
}