import { FileSearch, MagnifyingGlass } from "phosphor-react"
import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { SearchForm } from "./components/SearchForm"
import { SearchFormContainer } from "./components/SearchForm/styles"
import { PriceHighlight, TransactionContainer, TransactionTable } from "./styles"
export function Transaction(){
    return (
        <>
            <Header/>
            <Summary/>
            <TransactionContainer >
                <SearchForm/>                    
                <TransactionTable>
                    <tbody>
                        <tr>
                            <td width="40%">Desenvilvimento de Site</td>
                            <td>
                                <PriceHighlight variant="income">
                                R$12.000,00
                                </PriceHighlight>
                                </td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>
                        <tr>
                            <td width="40%">Hamburguer</td>
                            <td>
                                <PriceHighlight variant="outcome">
                                -R$60,00
                                </PriceHighlight>
                                </td>
                            <td>Alimentação</td>
                            <td>13/04/2022</td>
                        </tr>
                    </tbody>
                </TransactionTable>
            </TransactionContainer>
        </>
    )
}