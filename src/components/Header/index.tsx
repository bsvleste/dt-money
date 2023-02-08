import { HeaderContainer, HeaderContent, NewTrasnactionButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';
import logoImg from '../../assets/logo.svg'
import { NewTransactionModal } from "../NewTransactionModal";
export function Header(){
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="dt money" />

            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <NewTrasnactionButton>Nova transação</NewTrasnactionButton>
                </Dialog.Trigger>
                <NewTransactionModal/>
            </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}