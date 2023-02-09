import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles";
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod';

const searchFormSchema = z.object({
    query: z.string()
})

type SearchFormInptus = z.infer<typeof searchFormSchema>
export function SearchForm(){
    const { register, handleSubmit, formState: { isSubmitting } } = useForm<SearchFormInptus>({
        resolver: zodResolver(searchFormSchema)
    })
    function handleSearchTransactions(data: SearchFormInptus) {
        console.log(data)
    }
    return(
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input
                type="text"
                placeholder="Busque por transacão"
                {...register('query')}
            />
            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass />
                Buscar
            </button>
        </SearchFormContainer>
    )
}